// === StateCompressionDP.js ===
// Assignment problem using DP with bitmasking
// dp[mask] = min cost to assign jobs to workers

function countBits(n) {
  let c = 0;
  while (n) { n &= (n - 1); c++; }
  return c;
}

function assignmentDP(cost) {
  const n = cost.length;
  const dp = Array(1 << n).fill(Infinity);
  dp[0] = 0;

  for (let mask = 0; mask < (1 << n); mask++) {
    const x = countBits(mask); // number of jobs already assigned
    for (let j = 0; j < n; j++) {
      if (!(mask & (1 << j))) { // job j not yet assigned
        const newMask = mask | (1 << j);
        dp[newMask] = Math.min(dp[newMask], dp[mask] + cost[x][j]);
      }
    }
  }
  return dp[(1 << n) - 1]; // all jobs assigned
}

// --- Example ---
const cost = [
  [9, 2, 7],
  [6, 4, 3],
  [5, 8, 1]
];

console.log("Min assignment cost:", assignmentDP(cost)); // 9
