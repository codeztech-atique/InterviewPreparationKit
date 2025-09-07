// ===== Heapsort.js =====
// In-place heap sort (ascending). Build max-heap, then pop to end.
function heapSort(arr, cmp = (a, b) => a - b) {
  // convert cmp to "max-heap" comparator for ascending output
  const greater = (i, j) => cmp(arr[i], arr[j]) > 0;

  const heapify = (n, i) => {
    for (;;) {
      let largest = i;
      const l = 2 * i + 1, r = l + 1;
      if (l < n && greater(l, largest)) largest = l;
      if (r < n && greater(r, largest)) largest = r;
      if (largest === i) break;
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      i = largest;
    }
  };

  const n = arr.length;
  // build max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
  // extract max to the end
  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(end, 0);
  }
  return arr;
}

// --- Example ---
if (require.main === module) {
  const a1 = [12, 11, 13, 5, 6, 7];
  console.log("Heapsort asc:", heapSort(a1.slice())); // [5,6,7,11,12,13]

  // Descending order: pass reverse comparator
  const a2 = [3, 9, 1, 4, 7];
  console.log("Heapsort desc:", heapSort(a2.slice(), (a,b)=>b-a)); // [9,7,4,3,1]
}

module.exports = { heapSort };
