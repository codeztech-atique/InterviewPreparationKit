# Google GenAI FDE — Lean Prep Guide (v2)
### Coding first · then RRK · most-asked questions only

> ⚠️ **Language:** The official PDF says the coding round tests **Python OOP** (30–50 lines, static editor, no run).
> **Action this week:** email your recruiter and ask if TypeScript is allowed. Until confirmed in writing → **prep in Python.**
> You can *think* in TS (the logic is identical), but write every practice solution in Python.

---

## PART 1 — CODING ROUND (60 min)

### Format
- Static Google Virtual Interview Platform: syntax highlighting only, **no running code**, no autocomplete
- Open-ended prompt → YOU extract requirements by asking questions
- Real code, not pseudocode · finish with test cases and self-found bugs

### The script (this is 50% of the grade)
1. Ask 3–5 clarifying questions (input size? types? duplicates? mutation OK? error handling expected?)
2. Say the algorithm + Big-O BEFORE coding: "Hash map, O(n) time / O(n) space — OK to proceed?"
3. Write clean code, narrating as you go
4. Trace 1 normal + 2 edge inputs out loud
5. Give 2–3 verbal test cases (happy / boundary / invalid)
6. Offer one optimization

### Top 10 most likely problems (in priority order — do these, skip everything else)

| # | Problem | Why it's asked |
|---|---------|----------------|
| 1 | **Tool registry / agent loop** — register tools, dispatch by name, handle unknown tool + bad args + retries | The on-brand FDE OOP question |
| 2 | **LRU cache** (+ TTL follow-up) | Classic OOP + hash map + ordering |
| 3 | **Rate limiter** (token bucket, per-tenant follow-up) | Practical systems OOP |
| 4 | **Topological sort** — tool/task dependency order, detect cycle | Graph + FDE-flavored |
| 5 | **Sliding window** — longest substring w/o repeats; moving average of a stream (class design) | Reported frequently at Google |
| 6 | **Two-sum / merge intervals** (hash + sorting) | Warm-up tier, still appears |
| 7 | **Valid parentheses / expression evaluator** (stack) | String manipulation + stack |
| 8 | **Tree BFS/DFS** — level order, max depth | Google staple |
| 9 | **Graph BFS** — number of islands / shortest path in grid | Google staple |
| 10 | **In-memory KV store with transactions** (begin/commit/rollback) | FDE-style OOP design |

**Daily minimum:** 1 timed problem (25–30 min), handwritten, spoken aloud, in Python.

### Python for TS developers — 30-minute gap sheet
- `dict` = your `Map`/object · `set` · `collections.Counter`, `defaultdict`, `deque` · `heapq` for priority queues
- Comprehensions: `[x*2 for x in nums if x > 0]` · `enumerate`, `zip`, slicing `arr[1:-1]`
- Classes: `def __init__(self, ...)`, `self.` everywhere, no `this`, no `new`
- Gotchas: `//` integer division · `is None` not `== None` · empty list/dict is falsy · mutable default args are shared — never `def f(x=[])`
- No `===`, no `let/const`, indentation IS the syntax

---

## PART 2 — RRK ROUND (60 min)

### Format
One open-ended agentic scenario, solved out loud. Clarifying questions ARE the test. Never hand-wave evals — "how do you know it's working?" is the differentiator question.

### The 7-step framework (say aloud every time)
**Clarify → Architecture → Data/RAG → Reliability+Evals → Security → Scale/Cost → Ship (MVP + metric)**
Timing: ~10 min clarify · 25–30 min architecture + one deep dive · 10 min scale/cost · 5 min ship.

### Top 10 most-asked RRK questions (priority order)

1. **"Design a customer-support agent for enterprise X"** — the classic opener (CRM + KB search + ticket API + human handoff)
2. **"The website is slow" / "the agent got worse — debug it"** — clarify → measure (p95, error rate, tokens) → bisect layers → mitigate → root-cause
3. **"10K internal users → millions external — what changes?"** — verbatim from the rubric (quotas, auth, sharding, async, abuse surface, cost per tenant)
4. **"How do you prevent hallucinations / prove groundedness?"** — RAG + citations, constrained outputs, golden set + LLM-as-judge + online metrics
5. **"PII, prompt injection, multi-tenant isolation"** — redact pre-prompt & pre-log; treat retrieved text as data not instructions; tool allowlists; per-tenant indexes + IAM
6. **RAG deep dive** — chunking, hybrid search + rerank, ACLs at retrieval time, freshness, citation quality
7. **"Same product at 1/10th the cost"** — model routing, caching, token caps, batch vs realtime, $/successful-task
8. **"Customer asks for X but needs Y" / "demo to a skeptical exec"** — consulting judgment, scope a narrow win, business metric first
9. **"When would you NOT use an agent?"** — deterministic workflow vs agency; shows judgment
10. **"Walk me through an agentic system you shipped"** — rehearse Abstrive/TMNA: problem → constraint → what YOU built → measurable result

### 3 STAR stories (2 min each, rehearse aloud)
1. Ambiguous customer blocker → you shipped (TMNA)
2. Production incident debugged under pressure
3. Stakeholder conflict / scope cut to hit a demo date

### GCP names — the 60-second cheat (your AWS → their GCP, July 2026)
- Bedrock → **Gemini Enterprise Agent Platform** (Vertex AI rebranded, Cloud Next Apr '26) + **Model Garden** (Gemini 3, Claude, Gemma)
- Bedrock AgentCore → **Agent Engine + Memory Bank + Agent Gateway + Agent Identity** (say the parallel out loud — instant credibility)
- Bedrock Agents/Strands → **ADK v1.0** (code-first) / Agent Studio (low-code)
- Guardrails → **Model Armor** · Kendra → **Vertex AI Search** · Lambda/Fargate → Cloud Functions/**Cloud Run**
- SQS/SNS → **Pub/Sub** · Redshift → **BigQuery** (mention "BigQuery-native grounding" once)
- Multi-agent interop → **A2A protocol v1.0** (drop it in any multi-agent design)

**Why Google Cloud pitch (memorize the 4 beats):** full stack (TPU → Gemini → Agent Platform → Workspace) · BigQuery data gravity · open (Claude in Model Garden, A2A/MCP) · governance built in (Agent Gateway, Model Armor, IAM).

---

## 14 DAYS, SIMPLIFIED

| Days | Coding (PM, 45 min) | RRK (AM, 60 min) |
|------|---------------------|------------------|
| 1–2 | Python gap sheet + problems #5, #6 | GCP flashcards + 7-step framework |
| 3–4 | #2 LRU, #7 stack | Scenario Q1 + Q2 aloud, timed |
| 5–6 | **#1 tool registry (twice)**, #3 rate limiter | Q3 + Q5 aloud |
| 7 | #4 topo sort | 3 STAR stories, recorded |
| 8–9 | #8, #9 trees/graphs | Q4 + Q7 aloud; rapid-fire fundamentals |
| 10–11 | **Full 60-min coding mock** | **Full 60-min RRK mock** |
| 12 | Redo worst problem + #10 | Patch mock weak spots |
| 13 | 1 easy confidence problem | Cheat-sheet review + 3 questions for interviewers |
| 14 | REST | REST |

## DAY-OF (both rounds)
- No AI tools · clarify first, always · talk continuously
- Coding: Big-O before code · edge cases (empty/None/duplicates/malformed) · end with tests
- RRK: never skip evals · end with MVP ship path + success metric
- Mention once per round: founder (Abstrive) / embedded builder (TMNA) — it's the exact FDE profile
