# Google GenAI Forward Deployed Engineer — Complete 2-Week Prep Guide
### Personalized for Atique | Interview: ~end of July 2026 | 2 rounds: RRK (60 min) + Coding (60 min)

> **Your unfair advantage:** You've already done this job. Abstrive is a multi-agent platform on AWS Bedrock AgentCore. The TMNA engagement is literally "embedded builder shipping agentic AI inside an enterprise customer's environment" — that IS the FDE role description. Your job in these interviews is not to learn new material; it's to **translate what you already do daily into Google's vocabulary and evaluation rubric**.

---

## ⚡ CRITICAL UPDATE your PDF doesn't reflect

Your prep PDF is dated **April 22, 2026** — the same day as Cloud Next '26. Since then:

| Old name (in your PDF) | Current name (July 2026) |
|---|---|
| Vertex AI | **Gemini Enterprise Agent Platform** (existing workloads unchanged; new features ship only under the new name) |
| Vertex AI Agent Builder / Agentspace | Absorbed into **Gemini Enterprise** |
| — | **ADK v1.0** (Agent Development Kit) — stable in Python, Go, Java, TypeScript; graph-based sub-agent networks |
| — | **A2A protocol v1.0** — production at 150+ orgs, governed by Linux Foundation's Agentic AI Foundation |
| — | **Agent Engine** (managed runtime), **Memory Bank / Sessions**, **Agent Studio** (low-code), **Agent Registry**, **Agent Identity**, **Agent Gateway** (policy enforcement for MCP/A2A traffic), **Agent Observability** |
| — | **Model Armor** — inline defense against prompt injection, tool poisoning, data leakage |
| — | **Model Garden** — 200+ models incl. Gemini 3 family AND Anthropic Claude as first-class citizens |

**How to use this:** Answer in AWS (they explicitly allow your primary cloud), then map to GCP names *fluently and casually*: "On the TMNA platform we used Bedrock AgentCore for the managed agent runtime — the equivalent here is Agent Engine on the Gemini Enterprise Agent Platform, with ADK as the code-first framework." One sentence like that signals more than an hour of memorized trivia.

Sources to skim (30 min total):
- cloud.google.com/products/gemini-enterprise-agent-platform
- Google Cloud Next '26 wrap-up blog (google "Google Cloud Next 2026 wrap up blog")
- A2A protocol spec overview + ADK docs quickstart

---

## 1. Round Map & What They're Actually Grading

| | Round 1 — RRK (60 min) | Round 2 — Coding (60 min) |
|---|---|---|
| Format | Live open-ended agentic/GenAI scenario, verbal + maybe shared doc | Static Google Virtual Interview Platform (syntax highlighting, **no run**), Google Meet |
| Core signal | Can you go from vague customer ask → shipped agentic system, out loud, with tradeoffs | Python OOP fluency, ~30–50 lines, production-ready without an interpreter |
| Hidden signal | Consulting instinct: do you clarify before designing? Do you think about *their* business? | Process: clarify → algorithm → Big-O → real code → edge cases → tests → optimize |
| Killer mistakes | Jumping to architecture before requirements; hand-waving evals ("how do you know it's working?" is the differentiator question) | Pseudocode; silent coding; forgetting edge cases; no test cases at the end |
| Rule | **No AI tools. Talk constantly.** | **No AI tools. Real Python, not pseudocode.** |

FDE loops are graded on three axes **equally**: technical depth, real-world deployment thinking, and client-facing communication. Preparing only one fails you on the other two. Interviewers are not grading your final answer — they're watching how you think through a problem you've never seen.

---

## 2. Round 1 (RRK) — The Question Bank

Compiled from the official PDF, recent candidate reports (Blind, Medium, Exponent, FDE Academy), and the RRK rubric. Grouped by theme, ordered by likelihood.

### A. The opener — open-ended agentic design (near-certain, 25–35 min)

These start deliberately vague. The clarifying questions ARE the test.

1. **"A [retail/bank/telecom] customer wants an AI agent for customer support. Design it."** ← the classic
2. **"Design a RAG system over an enterprise's internal documents. Answers must be grounded and access-controlled."**
3. **"A customer has an AI pilot that works in demos but fails in production. How do you get them to enterprise-grade?"** (this is the role's literal mission statement — expect some version of it)
4. **"Design a multi-agent system where agents must coordinate on a workflow"** (planner/researcher/executor, shared state, handoffs)
5. **"The customer's data can't leave their VPC / their country. Design the agent under that constraint."**
6. **"You have 2 weeks to demo value to a skeptical CTO. What do you build?"**
7. **"Design an agent that takes actions (writes to systems), not just answers questions. How do you make that safe?"** (human-in-the-loop, approval gates, idempotency, rollback)

**Your 7-step framework — say it aloud EVERY time:**
1. **Clarify** — users & volume, SLA/latency budget, data sources & freshness, allowed tools/actions, success metric, must-not-dos (PII, residency, brand risk). Freeze requirements before drawing anything.
2. **Architecture** — model + orchestration (ADK-style agent graph) + tools (typed schemas) + retrieval + memory/state (session vs long-term) + observability/tracing.
3. **Data** — ingestion, chunking, hybrid search + rerank, ACLs enforced *at retrieval time* per user identity, freshness pipeline.
4. **Reliability** — retries w/ backoff, timeouts, circuit breakers, graceful degradation, human handoff triggers, **eval harness** (golden set + LLM-as-judge + online metrics). Never skip evals — it's the differentiator question.
5. **Security** — PII redaction pre-prompt & pre-log, least-privilege tool scopes, prompt-injection defenses (allowlists, output validation, never execute raw model text — name-drop Model Armor), tenant isolation, audit trails, agent identity.
6. **Scale/Cost** — model routing (small model for intent, big for hard cases), caching (retrieval + response), token budgets, batch vs realtime, $/successful-task as the metric.
7. **Ship** — narrow MVP in *their* environment, instrument from day 1, demo script for stakeholders, roadmap loop back to product.

**Timing:** ~10 min clarify · 25–30 min architecture + one deep dive (they'll pick security OR reliability OR scale) · 10 min cost/troubleshoot · 5–10 min ship & your questions.

### B. Troubleshooting (very likely, 10–15 min)

The PDF's sample: **"Your marketing manager says the new company website is slow. What do you do?"**
Also expect the GenAI version: **"The agent you deployed last month is suddenly giving wrong/slow answers. Walk me through it."**

Structured script:
1. Clarify symptom precisely — slow for whom, since when, which pages/flows, how measured? (Don't accept "slow.")
2. Quantify & reproduce — p50/p95, error rates, token counts, tool failure codes, synthetic probe.
3. Bisect the layers — client → DNS/CDN → LB → app/API → retrieval/vector DB → LLM serving → tools → data. Change one variable at a time.
4. Mitigate first (fallback model, cached responses, circuit break, human handoff), root-cause second.
5. For agent regressions specifically: what changed? — prompt version, model version, index refresh, tool schema, data drift, traffic mix. Check traces before theories.
6. Close the loop — postmortem, monitor, alert threshold.

Watch "Life in App Engine Production" (linked in PDF) once — it's the mindset they calibrated this question against.

### C. Scalability (likely follow-up)

**"Your solution works for 10,000 internal users. Now it's going to millions of external clients. What changes?"** (verbatim rubric line)

Talking points: stateless serving + durable external state; multi-tenant quotas & rate limits; auth changes (internal SSO → external identity); sharded/replicated indexes; async job queues + backpressure; provisioned throughput vs on-demand for model serving; warm pools; abuse/prompt-injection surface explodes with external users; cost governance per tenant; regional deployment & data residency.

### D. Security / Privacy / Compliance (likely deep dive)

- How do you keep PII out of prompts and logs? (redaction/tokenization pre-model, DLP scanning, retention policy)
- How do you prevent prompt injection when the agent reads untrusted content (emails, web, docs)? (treat retrieved text as data not instructions, tool allowlists, output schema validation, sandboxed execution, Model Armor-style inline screening)
- Multi-tenant isolation: per-tenant indexes, secrets, IAM-scoped retrieval; agent identity + audit logging.
- What can/can't go to the model API in a regulated environment? (VPC-SC style perimeters, CMEK, regional endpoints, on-prem/edge options)

### E. GenAI fundamentals (rapid-fire, sprinkled anywhere)

Be able to give a crisp 30–60 second answer to each:
- Why do LLMs hallucinate, and your 3 mitigations ranked (grounding/RAG + citations, constrained output/tool use, evals + abstention thresholds)
- RAG vs fine-tuning vs long context — when each, and cost tradeoffs
- Embeddings & chunking — what breaks retrieval quality and how you debug it (chunk size, hybrid search, rerankers, metadata filters)
- Agent vs workflow — when do you actually need agency vs a deterministic pipeline (say this — it shows judgment; many "agent" asks are workflows)
- ReAct loop, tool/function-calling schemas, planning vs reacting
- Context engineering: what goes in context, token budgets, memory (session vs long-term, e.g. Memory Bank)
- Evals: golden datasets, LLM-as-judge with rubric, groundedness/citation checks, online A/B, regression gates in CI
- Latency levers: streaming, parallel tool calls, smaller router models, caching, trimming top-k
- Temperature/top-p, structured output modes, why JSON mode ≠ correctness

### F. Consulting / customer skills (guaranteed, woven throughout)

- "A customer asks for X but you believe they need Y. What do you do?"
- "How do you scope an engagement in the first two weeks?"
- "How do you say no to a stakeholder / deliver bad news?" → deliver early, with options, with a path forward
- "How do you demo to a non-technical executive?" → business metric first, live narrow win, roadmap
- "Why FDE and not a regular SWE role?" → connect YOUR history: DevRel at Zoom (explaining tech to outside audiences), Deloitte/TMNA (embedded in a customer env), founder of Abstrive (founder's mindset — the PDF literally asks for this). Do NOT say "I like talking to people."

Prepare **3 STAR stories** (2 min each, business outcome in the first sentence):
1. **Ambiguous customer blocker → you shipped**: TMNA — vague enterprise ask → scoped → shipped agentic capability in their AWS environment; integration/data-readiness/state-management pain you personally solved (mirror the JD's exact words).
2. **Production incident under pressure**: an agent/platform failure you diagnosed layer-by-layer — emphasize measurement before theories, mitigation before root cause.
3. **Stakeholder conflict / scope cut**: a time you cut scope to hit a demo date or pushed back on a stakeholder and kept the relationship. Deloitte engagements are full of these.
Bonus story: **feedback loop to product** — field insight you turned into a platform/roadmap change (Abstrive or TMNA). The dual-purpose "white glove + product feedback loop" is in the role description; having a story for it is rare and powerful.

### G. GCP naming fluency (5 flashcard minutes/day)

Your AWS → GCP map (this is YOUR stack, so it'll stick fast):

| You know (AWS) | Say (GCP, July 2026) |
|---|---|
| Bedrock / Bedrock model catalog | Gemini Enterprise Agent Platform / Model Garden (Gemini 3 Pro & Flash, Claude, Gemma) |
| Bedrock AgentCore (runtime, memory, gateway, identity) | **Agent Engine, Memory Bank/Sessions, Agent Gateway, Agent Identity** — the parallel is almost 1:1; say so out loud |
| Bedrock Agents / Strands | **ADK** (code-first, graph of sub-agents) + Agent Studio (low-code) |
| Bedrock Guardrails | **Model Armor** |
| Kendra / OpenSearch vector | **Vertex AI Search** (grounding/RAG), AlloyDB/pgvector, BigQuery vector search |
| Lambda / ECS/Fargate / EKS | Cloud Functions / **Cloud Run** / GKE |
| S3 / DynamoDB / RDS | Cloud Storage / Firestore or Bigtable / Cloud SQL & AlloyDB |
| SQS/SNS/EventBridge | **Pub/Sub**, Eventarc, Cloud Tasks |
| CloudWatch/X-Ray | Cloud Monitoring/Logging/Trace + **Agent Observability** |
| IAM / KMS / VPC endpoints | Cloud IAM / Cloud KMS (CMEK) / **VPC Service Controls** |
| Redshift / Glue | **BigQuery** (its data gravity is Google's #1 enterprise wedge — say "BigQuery-native grounding" once) |
| — (no AWS equivalent at v1.0) | **A2A protocol** — cross-vendor agent interop, Linux Foundation governed. Mention it in any multi-agent design. |

**60-second "why Google Cloud for GenAI" pitch (memorize the beats):** full-stack ownership (TPUs → Gemini 3 models → Agent Platform → Workspace distribution) · BigQuery data gravity — agents live where enterprise data already is · open by design (Model Garden incl. Claude, framework-agnostic ADK, open A2A/MCP support) · enterprise governance built in (Agent Gateway, Model Armor, IAM, VPC-SC) · proof points: production A2A at 150+ orgs, major regulated-industry deployments announced at Next '26.

---

## 3. Round 2 (Coding) — Format, Patterns, Drill Set

**Format facts:** static editor (formatting only, no run) · Python · **OOP emphasis** + fundamental system design in code · 30–50 lines · open-ended prompt so requirements come from YOUR clarifying questions · real code, no pseudocode · intermediate-to-advanced time/space complexity · finish with test cases and self-found bugs.

**Recent candidate reports:** string/array manipulation with complexity walk-through is common; graph/matrix/tree (BFS/DFS) shows up often at Google generally; FDE loops also favor practical "build a small tool to a loose spec" style — OOP class design with sensible interfaces, not LeetCode-hard tricks. 300 LeetCode is the wrong prep; **process fluency in Python is the right prep**.

### The out-loud script (drill until automatic)

1. Restate the problem + ask 3–5 clarifying Qs (input size? types? duplicates? sorted? mutation OK? memory limits? streaming or batch?)
2. State the algorithm + Big-O **before** coding: "Hash map pass, O(n) time, O(n) space. OK to proceed?"
3. Write clean Python: type hints, meaningful names, guard clauses for empty/None, custom exceptions where natural.
4. Trace 1 normal + 2 edge inputs line-by-line, out loud.
5. State 2–3 test cases verbally (happy, boundary, invalid).
6. Offer the optimization ("we could drop space to O(1) with two pointers if the array is sorted — want me to?").

### Priority drill list — 12 problems, all in Python, all handwritten (no interpreter)

**Tier 1 — FDE-flavored OOP (highest ROI, do all 5):**
1. **Tool registry + agent loop** — `ToolRegistry` class: register tools with JSON-schema-ish signatures, dispatch calls by name with typed args, handle unknown tool / bad args / tool exception with retries. (~40–50 lines. This is THE on-brand question.)
2. **LRU cache** (OrderedDict or dict+DLL) → follow-up: add TTL. Frame it as an embedding/response cache.
3. **Rate limiter** — token bucket class; follow-up: sliding-window variant, per-tenant buckets.
4. **Topological sort** — tool/task dependency ordering (Kahn's algorithm), detect cycles. Frame: "tools whose outputs feed other tools."
5. **In-memory KV store with transactions** (begin/commit/rollback) or a **retry-with-exponential-backoff decorator** — both are classic FDE-style OOP asks.

**Tier 2 — patterns Google actually asks (do all 5):**
6. Sliding window — longest substring without repeats + moving average of a latency stream (design the class: `add(value)`, `get_avg()`).
7. Two pointers / hash — two-sum & 3-sum variant, merge intervals.
8. Stack — valid parentheses, basic expression evaluator (numbers, + - * /, parens).
9. Tree BFS/DFS — level-order traversal, max depth, lowest common ancestor.
10. Graph BFS — number of islands / shortest path in a matrix.

**Tier 3 — if time (pick 2):**
11. Heap — top-K frequent elements, merge K sorted lists.
12. String manipulation — group anagrams; parse a log line / simple JSON-ish nested structure validator.

**Python-specific gotchas to drill (you're coming from JS/TS):**
- `dict` / `set` / `collections.Counter`, `defaultdict`, `deque`, `OrderedDict`, `heapq` — know the APIs cold, no autocomplete on VIP
- List/dict comprehensions, `enumerate`, `zip`, slicing, `sorted(key=lambda...)`
- Dataclasses or plain classes with `__init__`, `__repr__`; `@property`; ABC only if asked
- Mutable default argument trap; integer division `//`; `is None` vs `== None`; f-strings
- No `let/const`, no `===`, no truthiness surprises: empty containers are falsy — use deliberately

**Daily minimum:** 1 timed problem (25–30 min), handwritten in a plain text editor with syntax highlighting OFF autocompletion, spoken aloud. Simulate VIP exactly.

---

## 4. Most-Asked Questions — Cheat Sheet (print this)

**RRK, in rough order of probability:**
1. Design a customer support / knowledge agent for enterprise X (the opener)
2. "Website is slow" or "agent got worse" — structured troubleshooting
3. 10K internal users → millions external — what breaks
4. How do you stop hallucinations / prove groundedness (evals!)
5. PII + prompt injection + multi-tenant isolation
6. RAG deep dive: chunking, hybrid search, ACLs, freshness, citations
7. Cost: same product at 1/10th the budget
8. Customer asks for X, needs Y / demo to skeptical exec (consulting)
9. Agent vs workflow — when NOT to use an agent
10. Walk me through an agentic system you shipped (→ Abstrive/TMNA, rehearsed)

**Coding, in rough order of probability:**
1. OOP design of a small practical system (registry/cache/limiter/KV store)
2. String/array manipulation + complexity discussion
3. Hash/two-pointer/sliding-window classic
4. Tree or graph BFS/DFS
5. Topo sort / dependency ordering
6. Follow-ups: optimize space, handle malformed input, add a feature to your class

---

## 5. 14-Day Calendar

**Rhythm: mornings = RRK aloud · evenings = 1 timed Python problem · 15 min GCP flashcards daily**

| Days | RRK track (AM, 60–90 min) | Coding track (PM, 45–60 min) |
|---|---|---|
| **1–2** | Read Next '26 announcements; build your AWS→GCP map into flashcards; write the 60-sec Google Cloud pitch; internalize the 7-step framework | Python syntax re-drill: collections, comprehensions, class patterns; solve #6 & #7 |
| **3–4** | Scenarios 1 & 2 aloud (support agent, enterprise RAG), full 7 steps, timed 35 min each | #2 LRU cache, #8 stack/expression eval |
| **5–6** | Scenario 3 (multi-agent + A2A mention) & Scenario 5 (VPC/residency); troubleshooting drill: "website slow" full script aloud | #1 **tool registry/agent loop** (do it twice), #3 rate limiter |
| **7** | Draft + rehearse 3 STAR stories out loud, 2 min each; record yourself once | #4 topo sort |
| **8–9** | Scenario 6 (2-week demo) & Scenario 7 (action-taking agent); rapid-fire GenAI fundamentals — have someone (or a timer) quiz you 60 sec/answer | #9 tree BFS/DFS, #10 graph BFS |
| **10** | **FULL MOCK RRK, 60 min** — friend or self-recorded; grade yourself against the 7 steps | Light: review all Tier 1 solutions from memory |
| **11** | **FULL MOCK CODING, 60 min** — static editor, no run, talk throughout | — |
| **12** | Patch weak spots from both mocks only | #5 KV/transactions + one redo of your worst problem |
| **13** | One final light pass: cheat sheet §4, STAR stories, GCP pitch. Prep 3 questions to ask interviewers (e.g., "How do FDE field insights actually flow into Agent Platform roadmap?") | 1 easy confidence problem, stop early |
| **14 / day-of** | REST. Skim cheat sheet once. No new material. | Sleep, water, stable Meet setup, second device fallback |

---

## 6. Day-of Checklist

- [ ] **No AI tools** — non-negotiable, stated twice in the PDF
- [ ] Clarify FIRST, always — the question is designed vague; freeze requirements aloud
- [ ] Talk continuously — silence reads as being stuck
- [ ] RRK: hit all 7 steps; if running long, say "for time, headline on cost: routing + caching + token caps — happy to go deeper"
- [ ] RRK: never hand-wave evals — "here's my golden set + judge rubric + online metric" wins the round
- [ ] Coding: algorithm + Big-O *before* code; real Python; edge cases (empty, None, duplicates, huge input, malformed); 2–3 verbal tests at the end
- [ ] Start working, then refine — a working O(n²) beats an unfinished O(n)
- [ ] End RRK with MVP ship path + success metric; end coding with tests + one optimization offer
- [ ] Weave your identity in once each round: founder (Abstrive), embedded builder (TMNA), educator (Zoom DevRel/Codez Tech) — it's the exact FDE profile

---

## 7. Sources & Further Reading

- Official FDE Prep PDF (in this folder) — the rubric; re-read pages 3–4 on days 7 and 13
- Google Cloud Next '26 wrap-up + Gemini Enterprise Agent Platform product page (cloud.google.com)
- ADK docs + A2A protocol spec (skim quickstarts)
- Exponent: Google Forward Deployed Engineer interview guide (round-by-round breakdown, sample questions)
- FDE Academy: FDE interview questions guide (failure patterns, 30+ real questions)
- Pragmatic Engineer: how the FDE role works at OpenAI/Palantir (role context, worth one read)
- "Life in App Engine Production" video (troubleshooting mindset)
- Prepare for Your Google Interview: Coding / Systems Design (YouTube)
- Your repo: github.com/codeztech-atique/InterviewPreparationKit — use `Datastructure/` for pattern logic, but **rewrite everything you touch in Python**

**Bottom line:** You have 14 days, a role that mirrors your last two years of work, and a rubric in hand. Depth over breadth: 7 scenarios aloud + 12 Python problems handwritten + 3 stories rehearsed beats any amount of passive reading. Go get it. 🚀
