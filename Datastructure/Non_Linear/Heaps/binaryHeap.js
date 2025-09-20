//  Binary Heap
      
//        101
//      /     \
//     72      33
//    /  \    /  \
//   2   45  5    1    

// Lookup - O(n) 
// Insert - O(log n)
// Delete - O(log n)

// Note - Each and Every level is greater than the previous level.

// Visual Algo - https://visualgo.net/en/heap?slide=1

class Heap {
  constructor(cmp = (a, b) => a - b) {
    this.data = [];
    this.cmp = cmp; // <0 means a has higher priority than b
  }
  size() { return this.data.length; }
  peek() { return this.data[0]; }

  push(val) {
    this.data.push(val);
    this.#siftUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) return undefined;
    this.#swap(0, this.size() - 1);
    const out = this.data.pop();
    this.#siftDown(0);
    return out;
  }

  #siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.cmp(this.data[i], this.data[p]) < 0) {
        this.#swap(i, p);
        i = p;
      } else break;
    }
  }

  #siftDown(i) {
    const n = this.size();
    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let best = i;
      if (l < n && this.cmp(this.data[l], this.data[best]) < 0) best = l;
      if (r < n && this.cmp(this.data[r], this.data[best]) < 0) best = r;
      if (best !== i) {
        this.#swap(i, best);
        i = best;
      } else break;
    }
  }

  #swap(i, j) { [this.data[i], this.data[j]] = [this.data[j], this.data[i]]; }
}

// Helpers to make min-/max- heaps quickly
exports.minHeap = (cmp) => new Heap(cmp ?? ((a, b) => a - b));
exports.maxHeap = (cmp) => new Heap(cmp ?? ((a, b) => b - a));

// Create a min-heap
const h = minHeap();

// Add numbers
h.push(10);
h.push(5);
h.push(20);
h.push(1);

console.log("Size:", h.size());     // 4
console.log("Peek (min):", h.peek()); // 1

// Pop numbers (always gives the smallest first)
console.log("Pop:", h.pop()); // 1
console.log("Pop:", h.pop()); // 5
console.log("Pop:", h.pop()); // 10
console.log("Pop:", h.pop()); // 20