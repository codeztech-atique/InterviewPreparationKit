// Time complexity and sort are n log n
class Heap {
  constructor(cmp = (a, b) => (a - b)) {
    this.data = [];
    this.cmp = cmp;
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0]
  }

  push(value) {
    this.data.push(value);
    this.shiftUp(this.data.length - 1);
  }

  pop() {
    if(this.data.length == 0) return undefined;
    this.swap(0, this.data.length - 1);
    let out = this.data.pop();
    this.shiftDown(0);
    return out;
  }

  shiftUp(i) {
    
    while(i > 0) {
      let p = Math.floor((i - 1) / 2);
      if(this.cmp(this.data[i], this.data[p]) < 0) {
        this.swap(i, p);
        i = p
      } else break;
    }
  }

  shiftDown(i) {
    let n = this.size();
    while(true) {
      let l = 2 * i + 1, r = 2 * i + 2;
      let best = i;
      if(l < n && this.cmp(this.data[l], this.data[best]) < 0) best = l;
      if(r < n && this.cmp(this.data[r], this.data[best]) < 0) best = r;
      if(i != best) {
        this.swap(i, best);
        i = best;
      } else break;
    }
  }

  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

let minHeap = (cmp) => new Heap(cmp ?? ((a, b) => a - b));
let maxHeap = (cmp) => new Heap(cmp ?? ((a, b) => b - a))

// const h = minHeap();
// h.push(10); h.push(5); h.push(20); h.push(1);
// console.log("Size:", h.size());
// console.log("Peek (min):", h.peek());
// console.log("Heaps are:", h.data);
// console.log("Pop:", h.pop());
// console.log("Pop:", h.pop());
// console.log("Pop:", h.pop());
// console.log("Pop:", h.pop());


function heapSort(arr) {               // ascending using min-heap
  let h = minHeap();
  for(let n of arr) h.push(n);
  let out = [];
  while(h.size()) out.push(h.pop());
  return out;
}

// Optional: descending
function heapSortDesc(arr) {
  let h = maxHeap();
  for(let n of arr) h.push(n);
  let out = [];
  while(h.size()) out.push(h.pop());
  return out;
}

function kSmallest(arr, k) {
  let h = minHeap();
  let i = 0;
  for(let n of arr) h.push(n);
  let out = [];
  while(h.size() && i < k) {
    out.push(h.pop());
    i++;
  }
  return out;
}

function kLargest(arr, k) {
  let h = maxHeap();
  let i = 0;
  for(let n of arr) h.push(n);
  let out = [];
  while(h.size() && i < k) {
    out.push(h.pop());
    i++;
  }
  return out;
}


const arr = [10, 5, 20, 1, 72, 33, 2];
console.log("Original:", arr);
console.log("Heap Sort Ascending:", heapSort(arr));     // [1,2,5,10,20,33,72]
console.log("Heap Sort Descending:", heapSortDesc(arr)); // [72,33,20,10,5,2,1]

console.log("3 Smallest:", kSmallest(arr, 3)); // [1, 2, 5]
console.log("3 Largest:", kLargest(arr, 3));   // [72, 33, 20]