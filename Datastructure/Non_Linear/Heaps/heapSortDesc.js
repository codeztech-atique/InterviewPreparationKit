// Your Heap class stays the same...

const { maxHeap } = require('./binaryHeap.js');

function heapSort(arr) {
  const h = maxHeap();
  for (const x of arr) h.push(x);
  const out = [];
  while (h.size()) out.push(h.pop());
  return out;
}

const arr = [10, 5, 20, 1, 72, 33, 2];
console.log("Original:", arr);
console.log("Heap Sort Decending:", heapSort(arr));

module.exports = { heapSort };