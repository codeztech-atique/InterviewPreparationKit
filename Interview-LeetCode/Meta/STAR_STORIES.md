# STAR Stories — Leadership & Cross-Functional Templates

Use the template below to craft 6–8 concise STAR stories (30–90 seconds each) you can memorize and adapt.

Story template (fill per story):
- Title: short label (e.g., "Migrated payment pipeline to new API")
- Situation: brief context (what, when, scope)
- Task: your responsibility / goal
- Action: what you did (concrete steps, trade-offs you chose)
- Result: measurable impact (metrics, timeline, what changed)
- Stakeholders: teams involved
- What I learned / would do differently

Starter story prompts (create one for each):
1. Setting technical direction for a cross-team platform change
2. Designing and shipping a performance optimization with measurable latency improvements
3. Resolving a cross-functional conflict and aligning stakeholders
4. Roadmap planning and metric-driven prioritization
5. Debugging and fixing a production outage (incident response)
6. Leading a migration (schema, infra, or major refactor)

Example (brief):
- Title: Reduce API latency by 40%
- Situation: Internal search API had high p95 latency, affecting feeds (Q1 2024).
- Task: Lead cross-team effort to reduce p95 from 800ms to <300ms within one quarter.
- Action: Instrumented hotspots, proposed cache + batching, implemented read-side cache with TTL and metrics, coordinated rollout and feature flags.
- Result: p95 dropped from 800ms → 240ms, error rate unchanged, release in 6 weeks; increased throughput by 2x for peak traffic.
- Stakeholders: Search team, Feed team, SRE, Product
- Learnings: Start with canary traffic and stronger rollback plan.

Tips:
- Keep results metric-driven. Quantify impact when possible.
- Prepare follow-up details: trade-offs, alternatives considered, and the biggest unknowns.
