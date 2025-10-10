"use strict";

function grouping(events, N) {
  // user -> Set of connections
  const graph = new Map();

  const ensure = (u) => {
    if (!graph.has(u)) graph.set(u, new Set());
  };

  for (const [type, u, v] of events) {
    ensure(u);
    ensure(v);

    if (type === "CONNECT") {
      graph.get(u).add(v);
      graph.get(v).add(u);
    } else if (type === "DISCONNECT") {
      graph.get(u).delete(v);
      graph.get(v).delete(u);
    }
  }

  const less = [];
  const moreEq = [];

  for (const [user, neighbors] of graph.entries()) {
    const deg = neighbors.size;
    if (deg < N) less.push(user);
    else moreEq.push(user);
  }

  // Deterministic output (use lexicographic order)
  less.sort();
  moreEq.sort();

  return [less, moreEq];
}

// ---- Tests (from the prompt) ----
const events = [
  ["CONNECT","Alice","Bob"],
  ["DISCONNECT","Bob","Alice"],
  ["CONNECT","Alice","Charlie"],
  ["CONNECT","Dennis","Bob"],
  ["CONNECT","Pam","Dennis"],
  ["DISCONNECT","Pam","Dennis"],
  ["CONNECT","Pam","Dennis"],
  ["CONNECT","Edward","Bob"],
  ["CONNECT","Dennis","Charlie"],
  ["CONNECT","Alice","Nicole"],
  ["CONNECT","Pam","Edward"],
  ["DISCONNECT","Dennis","Charlie"],
  ["CONNECT","Dennis","Edward"],
  ["CONNECT","Charlie","Bob"]
];

console.log("N=3:", grouping(events, 3)); 
// Expected groups (names may be sorted differently but memberships should match):
// [ ["Alice","Charlie","Pam","Nicole"], ["Bob","Dennis","Edward"] ]

console.log("N=1:", grouping(events, 1)); 
// [ [], ["Alice","Bob","Charlie","Dennis","Edward","Nicole","Pam"] ]

console.log("N=10:", grouping(events, 10)); 
// [ ["Alice","Bob","Charlie","Dennis","Edward","Nicole","Pam"], [] ]
