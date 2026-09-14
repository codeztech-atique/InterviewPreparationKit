# GenAI + RAG Deep Dive — Everything for the Google FDE Interview
### Interview-ready answers, structured for a 60-second verbal delivery each
> Companion to `FDE_QUESTION_BANK.md` (which questions get asked) — this file is *how to answer them with depth*.

---

## §1. LLM Fundamentals

### 1.1 What actually happens during inference (the warm-up filter question)
Two phases:
- **Prefill:** the entire prompt is processed in one parallel pass through the transformer; attention keys/values for every token are computed and stored in the **KV cache**. Compute-heavy, parallel → determines **time-to-first-token (TTFT)**. Scales with prompt length.
- **Decode:** tokens generated one at a time, autoregressively. Each step attends over the KV cache and appends to it. Memory-bandwidth-bound → determines **tokens/sec**. Scales with output length.

Why you care as an FDE: this split explains *every* latency and cost conversation. Long prompts hurt TTFT; long outputs hurt total time; the KV cache is why prompt caching works and why long contexts eat GPU memory (KV cache grows linearly with context length × layers × heads).

### 1.2 Transformer in 60 seconds (no heavy math)
Tokenize → embed (+ positional info, modern models use **RoPE** — rotary embeddings encoding *relative* position, which is why they extend to long context better than learned absolute positions) → N identical blocks of **self-attention** (each token builds query/key/value vectors; attention weights = which other tokens to draw information from) + **feed-forward MLP** (where most "knowledge" is stored), each wrapped with residual connections and pre-layer-norm → final linear layer + softmax over the vocabulary = probability of the next token.

The one distinction that proves understanding: **decoder-only models (GPT/Gemini) use a causal mask** — every token may only attend to tokens before it. That's the entire difference from encoder models (BERT), and it's what makes generation possible.

- **Encoder-only (BERT):** sees both directions → great at understanding/classification/embeddings, can't generate.
- **Decoder-only (Gemini/GPT):** causal mask → generation. Won because one architecture + next-token objective scales to everything.
- **Encoder-decoder (T5):** explicit input→output mapping, still used for translation-style tasks.

### 1.3 Tokens & tokenization
Subword units learned by BPE/SentencePiece (~4 chars ≈ 1 token in English). FDE-relevant because: billing, rate limits, and context windows are all denominated in tokens; **Indic scripts and Hindi tokenize 2–4× less efficiently than English** → higher cost and less effective context for Indian-language customers — a differentiating talking point for a Google India loop.

### 1.4 Sampling: temperature, top-p, top-k
Model outputs logits → temperature divides logits before softmax (0 → argmax/greedy; higher → flatter distribution) → top-p keeps the smallest set of tokens with cumulative probability p ("nucleus"). Enterprise defaults: **temperature ~0 for extraction, classification, structured output, anything audited**; 0.7–1.0 for creative work. Caveat to say aloud: temp 0 is not fully deterministic across hardware/model updates — pin model versions for reproducibility.

### 1.5 Context windows — advertised vs usable
Three practical limits: (1) **lost-in-the-middle** — retrieval quality of facts buried mid-context degrades; (2) cost — you pay per input token every call; (3) TTFT grows with prompt length. Rule: **curate context, don't stuff it.** Long context is for small stable corpora and one-shot analysis; RAG is for large/changing/permissioned corpora.

### 1.6 KV cache & prompt caching (repeated interview topic)
- **KV cache:** per-request store of every token's attention keys/values so decode steps don't recompute the whole prefix. Memory grows linearly with sequence length — this is why long contexts are expensive to *serve*.
- **Prompt (prefix) caching:** the provider persists the KV cache for a shared prompt **prefix** across requests. Identical-prefix rule: anything variable (timestamp, user name, session ID) placed *before* the stable content silently breaks it. Structure prompts: **system prompt + few-shot examples + static corpus first, variable user content last.** Pays 50–90% on workloads with long stable prefixes; does nothing for short unique prompts.

### 1.7 How LLMs are trained (know the ladder)
1. **Pretraining** — next-token prediction on web-scale text. Produces a text-completer, not an assistant.
2. **SFT (supervised fine-tuning)** — instruction/response pairs teach the assistant format.
3. **Preference alignment** — RLHF (reward model + PPO) or **DPO** (directly optimizes on preference pairs, no reward model — cheaper, now common). Google interviewers may probe: RLHF aligns to human preference but can cause sycophancy/over-refusal.

### 1.8 Why LLMs hallucinate (guaranteed question — have this cold)
Root cause: the training objective rewards *plausible* continuations, not *true* ones. Contributing factors: knowledge gaps + lossy compression of training data, no built-in retrieval or uncertainty signal, RLHF rewarding confident-sounding answers, and prompts that ask beyond the model's knowledge.
**Mitigations, ranked (say them in this order):**
1. **Grounding/RAG with mandatory citations** — answer only from retrieved evidence.
2. **Constrained output + tool use** — don't let the model compute or recall what a tool can (calculator, SQL, API).
3. **Evals + abstention** — groundedness checks, confidence thresholds, "I don't know" as a first-class answer, human escalation.
Bonus signal: mention **selective prediction** — in high-stakes domains, tune the abstention threshold on the coverage-vs-accuracy curve.

---

## §2. Prompting & Structured Output

- **System prompt = versioned artifact.** Treat prompts like code: version control, regression evals on every change, staged rollout. Saying "prompt changes go through CI evals" is a senior signal.
- **Few-shot > instructions** for format compliance; put examples in the cached prefix.
- **Chain-of-thought:** "think step by step" or structured scratchpads improve reasoning; hide the scratchpad from end users; costs output tokens/latency.
- **Guaranteed JSON:** use the model's structured-output / function-calling mode — it does **constrained decoding** (masks invalid tokens during generation), which beats any prompt begging. Then still validate: schema validity ≠ semantic correctness. Pipeline: structured mode → schema validation → one retry with the validation error injected → deterministic fallback/escalation.
- **Prompt injection** (see §7) — never mix untrusted content and instructions without defenses.

---

## §3. RAG — the full pipeline (the centerpiece topic)

**One-liner:** RAG grounds the model in your data by retrieving relevant passages at query time and placing them in the prompt, so it answers from sources instead of memory. It's the default pattern for nearly every enterprise FDE engagement.

### 3.1 Pipeline end-to-end (walk this on a whiteboard in ~3 min)
```
Sources (Drive/SharePoint/CRM/DB/tickets)
  → Ingestion & parsing (OCR, tables, layout)
  → Chunking (structure-aware) + metadata (source, ACL, timestamp, section)
  → Embedding model → Vector index    ┐
  → Keyword/BM25 index                ┴ hybrid
Query → (rewrite/expand) → hybrid retrieve top-50 (ACL-filtered!)
  → Reranker (cross-encoder) → top-5
  → Prompt assembly (system + citations-required + chunks + question)
  → LLM → answer with citations
  → Groundedness check / abstain → user
(+ freshness pipeline: incremental re-index on source change)
(+ eval harness over the whole thing)
```

### 3.2 Chunking (repeated question: "how do you know your chunking is good?")
- **Fixed-size** (e.g., 512 tokens + 10–15% overlap): baseline, cheap, breaks mid-thought.
- **Structure-aware / recursive:** split on headings → paragraphs → sentences; respects document logic. Default choice.
- **Never split tables or code blocks;** extract tables separately with their caption.
- **Small-to-big / parent-document:** retrieve on small precise chunks, feed the LLM the surrounding parent section — precision in retrieval, context in generation.
- **Attach metadata to every chunk:** source URI, ACL group, updated-at, section title (embed the title with the chunk text — helps a lot).
- **"Good" is measured, not felt:** build a golden set of (question → relevant doc/passage) pairs; measure **recall@k and MRR**; A/B chunking strategies against it. Answering "we'd eyeball it" fails this question.

### 3.3 Embeddings & vector search
- Embedding = dense vector where semantic similarity ≈ **cosine similarity** (equivalent to dot product on normalized vectors — angle/direction carries meaning, magnitude doesn't).
- **ANN indexes** trade exact search for speed: HNSW (graph, high recall, memory-hungry), IVF (clusters), ScaNN (Google's, powers Vertex AI Vector Search).
- **Critical gotcha to name:** query and documents must use the **same embedding model version**; changing models = full re-index.
- Vector DB options and when: **Vertex AI Vector Search** (managed, scale), **AlloyDB/pgvector or BigQuery vector search** (data already lives there — "keep vectors next to the data" is a very Google-flavored answer), Pinecone/Weaviate/Chroma (name-drop awareness).
- **Vertex AI Search** = the managed end-to-end alternative (ingestion + hybrid retrieval + reranking out of the box) — offer it as the "don't build it yourself" option; hand-rolled pipeline when you need custom control.

### 3.4 Retrieval quality — the levers (deep-dive bait)
1. **Hybrid search:** dense (semantic) + sparse BM25 (exact terms — part numbers, error codes, names) fused with Reciprocal Rank Fusion. Pure vector search misses exact identifiers; say this.
2. **Reranking:** cross-encoder reads query+chunk *together* — far more accurate than embedding similarity; too slow for the full corpus, so: retrieve 50 cheap → rerank → keep 5.
3. **Query transformation:** rewrite conversational queries into standalone ones (resolve "what about *its* pricing?"), expand acronyms, **HyDE** (embed a hypothetical answer), decompose multi-hop questions.
4. **Metadata filtering first:** shrink the search space by tenant/product/date/ACL before similarity.
5. **Freshness:** event-driven incremental re-indexing; staleness timestamp on every chunk; TTL on caches.

### 3.5 Security in RAG (Google loop favorite)
- **ACLs enforced at retrieval time**: filter the index by the *caller's* identity/groups before similarity search. Post-generation filtering is too late — the model already saw it. Per-tenant indexes for hard isolation.
- Retrieved documents are **untrusted input** → prompt-injection surface (a poisoned wiki page can carry instructions). Treat as data; see §7.
- DLP/PII redaction at ingestion; audit-log every retrieval (who saw which chunk).

### 3.6 RAG evaluation (the differentiator — never hand-wave)
Two components, evaluated separately, plus end-to-end:
- **Retrieval:** recall@k, precision@k, MRR against a golden set.
- **Generation:** **groundedness/faithfulness** (is every claim supported by retrieved context?), **answer relevance**, **citation accuracy**. LLM-as-judge with an explicit rubric + periodic human calibration of the judge.
- **Online:** thumbs-up rate, escalation/deflection rate, follow-up-question rate.
- **Regression gates:** golden set runs in CI on every prompt/model/index change. Frameworks to name: Ragas, Vertex AI gen-ai-evaluation.

### 3.7 Advanced RAG (senior-signal name-drops, one line each)
- **Agentic RAG:** the model decides *when/what* to retrieve, can issue multiple queries, judge sufficiency, retry.
- **GraphRAG:** build a knowledge graph from the corpus; answers multi-hop and "summarize the whole corpus" questions where chunk retrieval fails.
- **Multimodal RAG:** embed images/diagrams/tables (Gemini is natively multimodal — natural Google plug).
- **Corrective RAG / self-reflection:** grade retrieved chunks, re-retrieve or web-search if inadequate.

### 3.8 RAG failure modes → fixes (rapid-fire table)
| Symptom | Likely cause | Fix |
|---|---|---|
| Confident wrong answer | Retrieval miss | Hybrid search, query rewrite, better chunking |
| "I don't have that info" but the doc exists | Vocabulary mismatch / chunk split the fact | BM25 side of hybrid; structure-aware chunks |
| Right doc retrieved, wrong answer | Lost-in-the-middle, too many chunks | Rerank harder, fewer better chunks, order by relevance |
| Answers from stale policy | Index freshness | Incremental re-index + recency boost + staleness metadata |
| User saw another tenant's data | ACL at wrong layer | Filter at retrieval by caller identity; per-tenant index |
| Great in demo, bad in prod | Demo golden-path corpus | Real-corpus evals, ingestion for messy PDFs/tables |

---

## §4. Fine-tuning & model adaptation

- **When to fine-tune:** behavior/format/tone/domain-*language*, latency-cost (distill a big model's skill into a small one), classification at scale. **Not for injecting facts** — facts change; RAG owns knowledge. The crisp line: *"RAG changes what the model knows; fine-tuning changes how it behaves."*
- **Methods ladder:** prompt engineering → few-shot → **PEFT/LoRA** (train small low-rank adapter matrices, ~1% of weights, cheap, swappable per-customer) → full SFT → RLHF/DPO. Always start left.
- **Distillation:** generate outputs with a frontier model, train a small model on them → 10× cost cut at similar task quality (this belongs in the "cut the bill 10×" answer).
- On GCP: Vertex AI supervised tuning for Gemini; Gemma for self-hosted fine-tunes.
- Risks to mention: catastrophic forgetting, overfitting to a narrow set, eval gate before/after, and data governance of the training set.

---

## §5. Agents & multi-agent systems

### 5.1 Core anatomy
Agent = LLM + instructions + **tools** (typed function schemas) + **memory/state** + a loop. **ReAct loop:** reason → act (tool call) → observe → repeat until done. Function calling: the model emits a structured call; *your runtime executes it* (the model never executes anything itself); result goes back into context.

### 5.2 Agent vs workflow (judgment question — expect it)
If the steps are known in advance → **deterministic pipeline** (testable, debuggable, cheaper). Use an agent only when the path depends on intermediate results. Most enterprise "agent" asks are workflows with one or two LLM steps — saying so is a hiring signal, not a risk.

### 5.3 Multi-agent patterns
- **Planner–worker(s)–critic** with typed handoffs; shared state store (session state vs long-term memory).
- **Why multi-agent at all:** context isolation (each agent gets a small, focused context), separated tool scopes (least privilege per agent), independent evaluation of each role.
- **Protocols:** **MCP** (agent↔tools/data, standardized tool servers) and **A2A** (agent↔agent, cross-vendor interop, Linux Foundation-governed) — mention both in any multi-agent design.
- **Google stack:** **ADK** (code-first agent graphs) → run on **Agent Engine** (managed runtime) with **Memory Bank/Sessions**, **Agent Gateway** (policy enforcement on MCP/A2A traffic), **Agent Identity**, **Agent Observability**; **Model Armor** screening inline. AWS mapping you already know: Bedrock AgentCore ≈ Agent Engine, almost 1:1 — say the mapping out loud.

### 5.4 Safe action-taking agents (repeated scenario)
Risk-tier every tool by blast radius: read-only tools free; low-risk writes with idempotency keys + auto-rollback; high-risk actions behind **human approval gates**. Dry-run mode first, full audit trail, least-privilege credentials *per agent*, kill switch.

### 5.5 Debugging agents (repeated: "root cause hidden across microservices")
**Trace ID propagated through every agent hop and tool call**; capture prompt, retrieved context, tool args/results, model+prompt versions per span. Debug = replay the trace, find the first span where input became wrong, then ask "what changed?" (prompt version, model version, index refresh, tool schema, data drift). Tools to name: OpenTelemetry, Cloud Trace, Agent Observability, LangSmith.

### 5.6 Agent memory
Session (conversation state, expires) vs long-term (user preferences, facts — vector store or Memory Bank). Curate what enters context each turn: summarize old turns, don't replay everything (cost + lost-in-the-middle).

---

## §6. Evaluation & observability (the differentiator section — re-read day-of)

The question behind every RRK scenario: **"How do you know it's working?"** Candidates who hand-wave this fail.

1. **Golden dataset** — 50–200 real(istic) cases with expected outcomes; grows from production failures.
2. **Offline evals** — exact checks where possible (schema, citations resolve, tool sequence); **LLM-as-judge with an explicit rubric** for fuzzy quality; calibrate the judge against human labels periodically (judges have bias: position, verbosity, self-preference).
3. **CI regression gates** — every prompt/model/index/tool change runs the golden set; block on regression. "Prompt changes are deploys."
4. **Online** — sampled human review, thumbs signals, task-completion rate, escalation rate, groundedness spot-checks, **$/successful task** as the business metric.
5. **Monitoring/alerts** — p50/p95 TTFT & total latency, token spend per tenant, tool error rates, retrieval recall drift (embedding drift as corpus changes), safety-filter trigger rate.
6. **A/B or shadow deployment** for model/prompt upgrades: shadow = new model runs silently on live traffic, outputs compared, zero user risk; A/B = live comparison on the online metric.

---

## §7. Security, privacy & safety (guaranteed deep-dive)

### 7.1 Prompt injection (the #1 GenAI security topic)
Direct (user types "ignore your instructions") and **indirect** (instructions hidden in retrieved docs/emails/web pages the agent reads). Defense-in-depth — no single fix:
1. Privilege separation: untrusted content is *data*; it cannot add instructions or directly trigger tools.
2. Tool allowlists + typed schemas + least-privilege scopes; high-risk actions behind human approval.
3. Output validation: never execute/render raw model text (SQL, shell, HTML) without sanitization.
4. Inline screening (**Model Armor**) on inputs and outputs; red-team continuously.
5. Assume breach: audit logs, anomaly alerts, blast-radius limits.

### 7.2 PII & data protection
- Redact/tokenize PII **before** the prompt and **before** logs (Cloud DLP); re-hydrate after generation if needed.
- Zero-retention API terms; CMEK; **VPC Service Controls** perimeter; regional endpoints.
- **India specifics worth naming:** DPDP Act 2023, RBI payment-data localization → Mumbai/Delhi regions (`asia-south1/2`), data-residency commitments — a strong Google-India differentiator.
- Multi-tenant: per-tenant indexes/secrets/quotas; agent identity per tenant; audit trail of who accessed what.

### 7.3 Safety
Content safety filters (configurable thresholds on Vertex), grounding requirements in the system prompt, abstention over guessing in regulated flows, human escalation path always designed in.

---

## §8. Serving, latency & cost (repeated: "too slow" / "cut the bill 10×")

### 8.1 Latency levers (know all, pick five aloud)
| Lever | Wins | Trade-off |
|---|---|---|
| Stream tokens | Perceived latency ~0 wait | UI work only |
| Smaller / router model (small model triages, big model on hard cases) | 5–10× on TTFT & cost | Router quality; eval it |
| Prompt/prefix caching | Big TTFT cut on long stable prefixes | Prefix ordering discipline |
| Semantic response cache | Skip the model entirely on repeats | Staleness, cache-key design |
| Trim context / top-k, prompt diet | Linear prefill savings | Recall risk — eval-gate it |
| Parallel tool calls | Cuts agent wall-clock | Ordering constraints |
| Speculative decoding / distilled model | Faster decode | Setup complexity |
| Provisioned throughput | Kills cold-start & queueing p99 | Cost commitment |

Know the two metrics by name: **TTFT** (prefill-bound → prompt length) and **tokens/sec** (decode-bound → output length).

### 8.2 The 10× cost answer (multiplicative stack)
route 80% to a small model (~4×) × prompt caching (~2× on input) × prompt diet: trimmed system prompt, fewer retrieved chunks (~1.5×) × batch API for offline work (~2× on that slice) × distill the top use-case into a fine-tuned small model. **Every step gated by the eval harness** — that's what keeps "without destroying quality" honest. Track **$/successful task**, not $/token.

### 8.3 Scale-out checklist (10K → millions, PDF-verbatim question)
Stateless serving, external session store · per-tenant quotas/rate limits · queue + backpressure for async work · sharded/replicated vector indexes · provisioned model throughput + fallback model · external identity + abuse detection (injection surface explodes) · regional deployment & residency · cost governance per tenant.

---

## §9. GCP GenAI stack — one-page fluency map

| Layer | Product (2026 naming) | One-liner |
|---|---|---|
| Models | **Gemini 3 family** (Pro/Flash), **Model Garden** (200+ incl. Claude, Gemma) | Flash for routing/volume, Pro for hard reasoning; Gemma for self-host |
| Platform | **Gemini Enterprise Agent Platform** (evolved from Vertex AI) | The umbrella — existing Vertex workloads unchanged |
| Agents | **ADK** (code-first) · **Agent Studio** (low-code) · **Agent Engine** (runtime) · Memory Bank/Sessions · Agent Registry/Identity/Gateway/Observability | Bedrock AgentCore ≈ Agent Engine — say the mapping |
| Protocols | **MCP** (tools) · **A2A v1.0** (agent interop, Linux Foundation) | Mention in any multi-agent design |
| RAG | **Vertex AI Search** (managed E2E) · **Vector Search** (ScaNN) · AlloyDB/pgvector · **BigQuery vector search** | "Ground where the data already lives — BigQuery data gravity" |
| Safety | **Model Armor** · Cloud DLP · configurable safety filters | Inline injection/leak screening |
| Perimeter | VPC Service Controls · CMEK · IAM · regional endpoints (asia-south1/2) | The regulated-industry answer |
| Serving/infra | Cloud Run · GKE · Cloud Functions · Pub/Sub · Cloud Tasks | Cloud Run is the default demo-to-prod path |
| Observability | Cloud Monitoring/Logging/Trace + Agent Observability | Trace-ID through every agent hop |

**60-second "why Google Cloud for GenAI":** full-stack ownership (TPUs → Gemini → Agent Platform → Workspace distribution) · BigQuery data gravity — agents live where enterprise data already is · open by design (Claude in Model Garden, framework-agnostic ADK, open A2A/MCP) · governance built in (Gateway, Model Armor, VPC-SC) · India: local regions + residency for DPDP/RBI-regulated customers.

---

## §10. Classical ML minimum (reported in GenAI FDE loops — don't skip)

- **Precision/recall/F1, confusion matrix**, why accuracy lies on imbalanced data (99.5%-negatives question), ROC-AUC = ranking quality, not business value.
- **Bias–variance, overfitting detection** (train/val gap) and fixes (regularization, more data, simpler model); **L1 vs L2** (L1 → sparsity/feature selection).
- **Train/test leakage & training-serving skew** — the "95% pilot → 70% prod" answer; point-in-time-correct features.
- **k-fold CV** and when it lies: time series (use forward chaining) and grouped data (user leakage across folds).
- When classical beats LLM: tabular, high-QPS, tight latency/cost → GBM/logistic regression. Pair: LLM extracts structure from text → classical model decides.
- **A/B testing:** define the metric first, power analysis for duration, no peeking (the "stopped at significance" trap = inflated false positives; use sequential tests).
- Drift monitoring: input distribution (PSI), prediction distribution, delayed ground-truth loops.

---

## §11. Ten-minute pre-interview warmup (read this last)

1. Hallucination answer, 30s, aloud.
2. RAG pipeline sketch from memory (§3.1) + "where it breaks."
3. "How do you know it's working?" → golden set, judge+rubric, CI gate, online metric, $/successful task.
4. Agent vs workflow one-liner.
5. TTFT vs tokens/sec, and the five latency levers.
6. The 10× cost stack.
7. ACLs at retrieval time; injection defense-in-depth.
8. AWS→GCP mapping sentence: "Bedrock AgentCore on TMNA ≈ Agent Engine + ADK here."
9. Your 4 STAR stories, first sentences only.
10. Breathe. Clarify before designing. Talk the whole time.
