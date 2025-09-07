// ===== TopKFrequent.js =====
// Top-K frequent elements using a min-heap on frequency
const { minHeap } = require('./binaryHeap');

function topKFrequent(nums, k) {
  const freq = new Map();
  for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1);

  const h = minHeap((a, b) => a[0] - b[0]); // [count, value]
  for (const [val, cnt] of freq.entries()) {
    if (h.size() < k) h.push([cnt, val]);
    else if (cnt > h.peek()[0]) { h.pop(); h.push([cnt, val]); }
  }
  const out = [];
  while (h.size()) out.push(h.pop()[1]);
  // optional: most frequent first
  return out.reverse();
}

// --- Example ---
if (require.main === module) {
  const arr = [1,1,1,2,2,3,3,3,3,4,5,5,5,6];
  console.log("Top 2 frequent:", topKFrequent(arr, 2)); // [3,1] or [1,3] depending on ties
  console.log("Top 3 frequent:", topKFrequent(arr, 3)); // e.g., [3,1,5]
}

module.exports = { topKFrequent };
