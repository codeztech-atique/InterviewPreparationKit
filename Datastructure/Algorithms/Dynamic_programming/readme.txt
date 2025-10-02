What is DP?

Dynamic Programming (DP) = optimal substructure + overlapping subproblems.

Optimal substructure: the optimal solution can be built from optimal solutions of subproblems.

Overlapping subproblems: the same subproblems repeat — memoize or tabulate them.

Two main styles:

Top‑down (memoization): recursive + cache

Bottom‑up (tabulation): iterative table, build from base cases

When in doubt: start top‑down to get it working → convert to bottom‑up for performance/clarity.