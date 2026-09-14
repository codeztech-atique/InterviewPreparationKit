# Google GenAI FDE (India) — Repeated Question Bank
### Every question actually reported by candidates + the official PDF · with answer keys
> Sources: Official Google FDE Prep PDF (this folder) · candidate write-ups on Medium/Reddit/Blind (2026) · Exponent FDE guide · FDEInterviews.com Google tracker · Dataford Google FDE guide
> Companion doc: `GENAI_RAG_DEEP_DIVE.md` (full technical answers for every GenAI/RAG topic below)

---

## How the loop actually runs (confirmed across all sources)

- **2 rounds** for the compressed 2026 FDE loop: **RRK (60 min)** + **Coding (60 min)**. Some loops add a Googleyness round. A shadow interviewer may dial in.
- **No AI tools. Ever.** Stated twice in the official PDF.
- RRK = one big open-ended agentic/GenAI design scenario (~35 min) + troubleshooting + rapid-fire fundamentals + consulting probes woven in.
- Coding = static Google Virtual Interview Platform (syntax highlighting, **no run button**), **Python**, 30–50 lines, OOP emphasis per the PDF — but multiple India candidates report **classic DSA (up to 3 questions, LC medium, one LC-hard report)**. **Prep both.**
- One candidate was offered a **choice of two RRK questions** (workflow-design vs another) — if offered, pick the one closest to your Abstrive/TMNA experience.

---

## PART 1 — RRK: The repeated scenarios (ranked by how often they're reported)

### ⭐ S1. "Design an AI workflow/agent for an enterprise with ~10,000 employees" — THE most-reported question
Real reported version (India candidate, Medium): *An advertising company wants to improve employee productivity. Employees research information from authorized sources, synthesize it, and prepare emails. Design the system.* The "10,000 employees" number was only revealed **after** the candidate asked a clarifying question — the vagueness is deliberate.

**What passes:** clarify business objective first → identity & per-user ACL-enforced retrieval → internal RAG + controlled external research → model gateway with policy controls → **human review before any email is sent** (never auto-send v1) → audit logging → eval plan → failure modes. What fails: jumping to architecture, ignoring permissions, letting the agent take unsafe actions.

**Clarifying questions the successful candidate asked (memorize this list):**
- Who are the primary users? What tasks consume the most time?
- Which internal CRM/document systems are available? Which external sources are allowed?
- Draft-only or full send? Must a human review every email? Can it ever auto-send?
- What confidential data is involved? How should access permissions be enforced?
- How fresh must research be? What latency is acceptable? Usage frequency?
- What counts as a successful outcome (the metric)?

### ⭐ S2. "Design a customer support agent for [retail/bank/telecom]"
The classic opener. Same 7-step framework (clarify → architecture → data/RAG → reliability+evals → security → scale/cost → ship). Differentiators: escalation to human, grounded answers with citations, action-taking (refunds?) behind approval gates, per-tenant isolation.

### ⭐ S3. "Design a RAG system over enterprise internal documents — grounded and access-controlled"
Reported repeatedly, incl. Dataford's variant: *"Design a RAG pipeline to minimize hallucinations when connecting to a customer's proprietary, high-latency data source."*
Key moves: ACL filtering **at retrieval time** using the caller's identity (never post-filter after the LLM sees it) · hybrid search + reranker · citations mandatory · abstain when retrieval confidence is low · for the high-latency source: cache/replicate into your own index, async refresh pipeline, staleness metadata on every chunk. Full pipeline in `GENAI_RAG_DEEP_DIVE.md` §3.

### ⭐ S4. "Design a creative story-writing agent" (reported verbatim, Reddit)
Sounds soft; it's a rigor test: How would it behave/reason? How do you structure outputs? Trade-offs? **How do you evaluate whether it's actually useful?** — evals for a *subjective* task: rubric-based LLM-as-judge (coherence, originality, instruction adherence), pairwise human preference, user retention/edit-distance as the online metric. Also: planning (outline → draft → self-critique → revise) vs single shot; temperature high for ideation, low for revision.

### S5. "A multi-agent system where agents coordinate on a workflow" + Dataford variant: *"Debug a multi-agent system where the root cause is hidden across multiple microservices"*
Design: planner/worker pattern, shared state store, typed handoffs, A2A protocol mention. Debug: **distributed tracing with a conversation/trace ID propagated across every agent and tool call** — replay the trace, bisect which agent's input first went wrong; check prompt/model/tool-schema/index versions before theories.

### S6. "Your solution works for 10,000 internal users → millions of external clients. What changes?" (verbatim in the official PDF)
Stateless serving + external durable state · internal SSO → external identity + abuse controls · prompt-injection surface explodes · sharded/replicated indexes · quotas & rate limits per tenant · provisioned throughput for model serving · cost governance · regional deployment/data residency (big for India: DPDP Act, RBI data-localization for banks).

### S7. Troubleshooting: "Marketing manager says the new website is slow" (verbatim in PDF) / "The agent got worse and nothing changed"
Script: clarify symptom precisely (slow for whom, since when, measured how?) → quantify (p50/p95, error rates) → reproduce → bisect layers (client → CDN → LB → app → retrieval → LLM → tools) → **mitigate first, root-cause second** → postmortem. For agents: diff the prompt version, model version, index refresh, tool schema, data drift, traffic mix. Google calibrated this against "Life in App Engine Production" — watch it once.

### S8. "Customer's data can't leave their VPC / their country. Design under that constraint."
VPC Service Controls perimeter, CMEK, regional endpoints (India regions: Mumbai `asia-south1`, Delhi `asia-south2`), no cross-border logging, self-hosted open models (Gemma) if API egress is banned, DLP redaction pre-prompt.

### S9. "You have 2 weeks to demo value to a skeptical CTO / You're the first FDE at a traditional shop"
Pick ONE narrow workflow with measurable pain → build in *their* environment on *their* data → instrument from day 1 → demo opens with the business metric, not the tech → roadmap slide last.

### S10. "Design an agent that takes actions (writes to systems). Make it safe."
Human-in-the-loop approval gates by blast radius, idempotency keys, dry-run mode, rollback plan, least-privilege tool scopes, audit trail, allowlisted tools with typed schemas.

---

## PART 2 — RRK: rapid-fire GenAI questions (reported, with 30–60s answer keys)

These get sprinkled into the scenario. Full-depth answers in `GENAI_RAG_DEEP_DIVE.md`.

| # | Reported question | 30-second answer key |
|---|---|---|
| 1 | **Why do LLMs hallucinate?** | Next-token prediction optimizes plausibility, not truth; no retrieval of facts, no calibrated "I don't know"; gaps + compression of training data. Mitigations ranked: RAG w/ citations → constrained output/tool use → evals + abstention thresholds. |
| 2 | **Walk me through a RAG pipeline end-to-end and where it usually breaks** | Ingest → chunk → embed → index → (query rewrite) → hybrid retrieve → rerank → prompt w/ citations → generate → eval. Breaks at: bad chunking, retrieval miss (vocabulary mismatch), lost-in-the-middle, stale index, ACL leaks, no evals. |
| 3 | **How do you chunk documents, and how do you know your chunking is good?** | Structure-aware (headings/sections) > fixed-size; 200–500 tokens w/ overlap; keep tables/code intact; attach metadata. You *know* via retrieval evals: recall@k on a golden set, not vibes. |
| 4 | **RAG vs fine-tuning vs long context — when each?** | RAG = knowledge that changes / needs citations / ACLs. Fine-tune = behavior, format, style, domain *language* (not facts). Long context = small stable corpus, one-off analysis; costs latency+$$ per call. Often RAG + small fine-tune together. |
| 5 | **Context window — practical limits in production?** | Advertised ≠ usable: lost-in-the-middle, cost scales with input tokens, latency scales with prefill. Curate context, don't stuff it. |
| 6 | **Customer says the LLM app is too slow. Five latency levers + trade-offs** | ① Stream tokens (perceived) ② smaller/router model (quality risk) ③ cache — prompt/prefix + semantic response cache (staleness) ④ trim context/top-k (recall risk) ⑤ parallelize tool calls + speculative decoding. Know TTFT vs tokens/sec. |
| 7 | **Cut the customer's LLM bill 10× without destroying quality** | Multiplicative stack: route 80% traffic to a small model × prompt caching × prompt diet (trim system prompt, top-k) × batch offline work × distill/fine-tune small model on big-model outputs. Gate every step with an eval so quality is provable. |
| 8 | **Customer refuses to send PII to an LLM API — options?** | ① Redact/tokenize PII pre-prompt (DLP), re-hydrate after ② VPC-SC + CMEK + regional endpoint + zero-retention terms ③ self-host open model (Gemma) in their VPC ④ hybrid: PII-touching steps on-prem, rest on API. |
| 9 | **Temperature & top-p — when temperature 0 in enterprise?** | Temp scales logit randomness; top-p truncates the nucleus. Temp ~0 for extraction, classification, structured output, anything audited/reproducible. Higher for ideation. Temp 0 ≠ deterministic across model versions — pin versions. |
| 10 | **You need guaranteed JSON but the model keeps breaking schema** | Don't beg in the prompt: use structured-output / function-calling mode (constrained decoding), validate against the schema, one retry with the validation error, then fallback. JSON mode ≠ *correct* values — still validate semantics. |
| 11 | **What is a token / why should an FDE care?** | Subword unit (BPE); you're billed and rate-limited in tokens; context limits are tokens; non-English (Hindi/Indic scripts) tokenizes worse → higher cost & fewer effective context chars — a real India-customer talking point. |
| 12 | **What happens when an LLM generates a response?** (warm-up filter) | Two phases: **prefill** (whole prompt processed in parallel, KV cache built → dictates time-to-first-token) then **decode** (autoregressive, one token at a time, reads KV cache → dictates tokens/sec). This split explains latency, cost, and why prompt caching works. |
| 13 | **How does prompt caching work / when does it pay?** | Server reuses the KV cache for an identical *prefix*. Pays hugely (50–90%) for long stable system prompts + few-shot examples; broken silently by putting anything variable (timestamp, user name) *before* the stable part. Order: stable → variable. |
| 14 | **Long context vs RAG vs prompt caching — failure modes of each?** | Long context: lost-in-the-middle, $$; RAG: retrieval miss = wrong answer w/ confident tone; caching: exact-prefix rule + staleness. They compose: cache the static corpus prefix, RAG for the long tail. |
| 15 | **Agent vs workflow — when do you NOT need an agent?** | If the steps are known ahead of time → deterministic pipeline (cheaper, testable, debuggable). Agent only when the path genuinely depends on intermediate results. Saying this out loud = judgment signal. |
| 16 | **Design an eval pipeline for a multi-step tool-selection agent** (Dataford, recently asked) | Layered: unit-test each tool → golden set of tasks w/ expected tool sequences (trajectory eval) → end-to-end task success (LLM-as-judge w/ rubric + spot human) → online: success rate, escalation rate, $/successful task. Regression-gate in CI on every prompt/model change. |
| 17 | **How do you evaluate an agentic workflow beyond latency?** (Dataford) | Task completion rate, groundedness/citation accuracy, tool-call precision (right tool, right args), trajectory efficiency (steps vs optimal), safety violations, human-escalation rate, cost per successful task. |
| 18 | **Context-window limits vs massive enterprise knowledge bases?** (Dataford) | You never "fit the KB in context" — retrieval is the answer: hybrid search + rerank to select a *tiny relevant slice*, hierarchical summarization for overview questions, metadata filters to shrink the space first. |
| 19 | **When does classical ML beat an LLM?** | High-volume/low-latency/low-cost scoring on tabular data (fraud, churn, ranking): a GBM wins on all axes. LLM wins on unstructured language in/out, low-data cold start, flexible instructions. "Customer wants AI for everything" → match tool to problem, often both (LLM for extraction → classical for decisioning). |
| 20 | **Precision/recall/F1 — which matters for fraud?** | Precision = of flagged, how many are truly fraud; recall = of fraud, how many caught. Fraud → recall-weighted (missed fraud costs more), but tune to the business cost matrix; never quote accuracy on 99.5%-negative data. |
| 21 | **Model scored 95% in pilot, 70% in production. What happened?** | Distribution shift, training/serving skew, data leakage in the pilot, pilot data was cherry-picked, feedback loops. Instrument first, compare input distributions, check point-in-time correctness of features. |
| 22 | **Prompt injection — agent reads untrusted content (email/web/docs)** | Treat retrieved text as *data, never instructions*; privilege separation (untrusted content can't trigger tools directly); tool allowlists + typed schemas; output validation; sandboxed execution; inline screening (Model Armor); log & red-team. |

---

## PART 3 — Coding round: what was actually asked

**Format (official PDF):** static editor, no run, Python, 30–50 lines, OOP + fundamental system design in code, open-ended prompt → clarify aloud, no pseudocode, finish with test cases + self-found bugs.
**Reality check (candidate reports):** several India candidates got **pure DSA — up to 3 questions**, LC-medium level (one LC-hard report). Others got practical/OOP builds. Prep the intersection.

### Reported / tracked problems, by bucket

**A. DSA actually reported for Google FDE loops (FDEInterviews tracker + Reddit):**
1. Edit distance (Levenshtein) — DP
2. Longest increasing subsequence — DP
3. Coin change (fewest coins) — DP
4. House robber — DP
5. Median of two sorted arrays (log time) — binary search
6. Validate a BST · Diameter of a binary tree · Max path sum · Build tree from preorder+inorder — tree set
7. Sort a k-sorted array — heap
8. Simulate infection spreading across a grid over time — multi-source BFS (rotting-oranges pattern)
9. Biased coin → fair flip (von Neumann trick) — probability + reasoning
10. String/array manipulation + complexity walkthrough (Exponent: most common)

**B. ML-flavored coding (reported for GenAI FDE specifically):**
11. Dot product of two sparse vectors (index→value map; follow-up: one side dense)
12. Implement k-means from scratch
13. Implement linear regression w/ gradient descent (know the MSE gradient cold)
14. Implement scaled dot-product attention forward pass (`softmax(QKᵀ/√d)V`)

**C. Practical/OOP "build a small tool" (PDF-aligned; multiple reports of "vibe-coding" style):**
15. **Tool registry + agent dispatch loop** (register tools w/ schemas, dispatch by name, unknown tool / bad args / retries) — the on-brand question
16. LRU cache (+TTL follow-up) — frame as response/embedding cache
17. Rate limiter (token bucket; per-tenant follow-up)
18. In-memory KV store with transactions (begin/commit/rollback)
19. Log-line / structured-text parser to a loose spec
20. Moving average / stats over a stream (class design)
21. Debug or extend an existing snippet with limited context; requirement changes mid-session — narrate assumptions

### The out-loud script (this is half the grade)
1. Restate + 3–5 clarifying Qs (sizes? types? duplicates? mutation OK? error handling expected?)
2. Algorithm + Big-O **before** code: "DP over prefixes, O(m·n) time/space — OK to proceed?"
3. Clean Python: type hints, guard clauses, meaningful names.
4. Trace 1 normal + 2 edge inputs aloud.
5. 2–3 verbal test cases (happy / boundary / invalid).
6. Offer one optimization.

---

## PART 4 — Consulting & behavioral (reported verbatim)

- Role-play: **"I'm a VP at a regional bank and I want 'a chatbot.' Run the discovery call."** ← reported; practice this aloud once
- Tell me about the most ambiguous project you've owned end-to-end. What did you do in week one?
- Turning a skeptical stakeholder into a champion
- Your demo breaks mid-demo, in front of the customer. What do you do in the room? (stay calm → fallback recording/backup env → narrate what it *would* do → follow up same-day with root cause)
- A project that failed. Whose fault was it? (own it; no blame)
- Disagreed with your manager / later realized the other person was right
- Balanced model quality vs latency/cost in something you shipped
- First 30/60/90 days in a customer-facing engineering role
- Why FDE and not SWE? → founder (Abstrive) + embedded builder (TMNA) + educator (Zoom DevRel). Never "I like talking to people."
- Estimate: LLM tokens/day for a Fortune-500 support org (Fermi: tickets/day × turns × tokens/turn — practice one aloud)

Have **4 STAR stories** rehearsed at 2 min each: ambiguous ask→shipped · production incident · stakeholder conflict/scope cut · field insight→product feedback loop.

---

## PART 5 — Official PDF rubric → where it's covered (verify nothing is unprepped)

Every topic Google's own prep PDF says they will assess, mapped to your prep material:

| PDF rubric item (verbatim topic) | Where you've prepped it |
|---|---|
| **AI/ML Engineering** — integrate models into a functional system | Part 1 scenarios S1–S5 · Deep Dive §3 (RAG), §5 (agents) |
| **Operational Excellence** — reliability, resilience, performance | S7 troubleshooting script · Deep Dive §6 (evals/monitoring), §8.1 (latency) |
| **Security, Privacy & Compliance** — PII / private data | S3, S8, S10 · rapid-fire #8, #22 · Deep Dive §7 (incl. DPDP/RBI for India) |
| **Scalability** — 10K internal → millions external (verbatim) | S6 · Deep Dive §8.3 checklist |
| **Performance & Cost Optimization** | Rapid-fire #6, #7 · Deep Dive §8.1–8.2 (latency levers + 10× stack) |
| **GenAI Concepts** — LLMs: training, serving, troubleshooting | Deep Dive §1 (internals + training ladder), §8 (serving), S7 (troubleshooting) |
| **NLP + hands-on GenAI experience** | Deep Dive §1.3, §3 · your Abstrive/TMNA stories (README §2F) |
| **Application Development** — build & articulate a demo's value | S9 (2-week demo) · consulting Qs in Part 4 |
| **Consulting** — uncover stakeholder needs, make recommendations | S1 clarifying-question list · bank-VP role-play · Part 4 |
| **Cloud Technology** — general cloud, GCP naming, value prop | Deep Dive §9 (GCP map + 60-sec pitch) · README §2G (AWS→GCP flashcards) |
| **Troubleshooting** — "website is slow" sample (verbatim) | S7 full script · watch "Life in App Engine Production" once |
| **System Design** — broad ask, clarify, trade-offs | The 7-step framework (README §2A) applied to all of Part 1 |
| **Coding** — Python OOP, 30–50 lines, static editor, no pseudocode, edge cases + tests + bugs | Part 3 (all 21 reported problems) · out-loud script · README §3 Python gotchas |

---

## PART 6 — Priority order if you're short on time

1. **Do S1 (10K-employee workflow) aloud, full 7 steps, twice.** It's the most-reported question and every other scenario is a variant.
2. Drill the 22 rapid-fire answers (Part 2) to 30–60s each — these are where candidates visibly stumble.
3. Coding: 1/day from bucket A (DSA) + bucket C (#15–18 OOP). Cover the DP set — India loops leaned DSA.
4. Rehearse the bank-VP discovery role-play and your 4 stories once.
5. Skim `GENAI_RAG_DEEP_DIVE.md` end-to-end the day before; re-read §3 (RAG) and §6 (evals) day-of.
