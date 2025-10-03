// Your Heap class stays the same...

const { minHeap } = require('./binaryHeap.js');

function heapSort(arr) {
  const h = minHeap();
  for (const x of arr) h.push(x);
  const out = [];
  while (h.size()) out.push(h.pop());
  return out;
}

const arr = [10, 5, 20, 1, 72, 33, 2];
console.log("Original:", arr);
console.log("Heap Sort Ascending:", heapSort(arr));

module.exports = { heapSort };
