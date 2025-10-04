class Heap {
    constructor(cmp = (a, b) => a - b) {
        this.data = [];
        this.cmp = cmp;
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
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
            const p = Math.floor(( i - 1) / 2);
            if(this.cmp(this.data[i], this.data[p]) < 0) {
                this.swap(i, p);
                i = p;
            } else break;
        }
    }

    shiftDown(i) {
        let n = this.size();
        while(true) {
            const l = 2 * i + 1, r = 2 * i + 2;
            let best = i;
            if(l < n && this.cmp(this.data[l], this.data[n]) < 0) best = l;
            if(r < n && this.cmp(this.data[r], this.data[n]) < 0) best = r;
            if(i != best) {
                this.swap(i, best);
                i = best;
            } else break;
        }
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }

}
const minHeap = cmp => new Heap(cmp ?? ((a, b) => a - b))
const maxHeap = cmp => new Heap(cmp ?? ((a, b) => b - a))


function heapSort(arr) {               // ascending using min-heap
    let h = minHeap();
    for(let x of arr) h.push(x);
    const out = [];
    while(h.size()) out.push(h.pop());
    return out;
}

// Optional: descending
function heapSortDesc(arr) {
  const h = maxHeap();
  for (const x of arr) h.push(x);
  const out = [];
  while (h.size()) out.push(h.pop());
  return out;
}

function kSmallest(arr, k) {
  const h = minHeap();
  for (const x of arr) h.push(x);
  const out = [];
  for (let i = 0; i < k && h.size(); i++) out.push(h.pop());
  return out;
}

function kLargest(arr, k) {
  const h = maxHeap();
  for (const x of arr) h.push(x);
  const out = [];
  for (let i = 0; i < k && h.size(); i++) out.push(h.pop());
  return out;
}


const arr = [10, 5, 20, 1, 72, 33, 2];
console.log("Original:", arr);
console.log("Heap Sort Ascending:", heapSort(arr));     // [1,2,5,10,20,33,72]
console.log("Heap Sort Descending:", heapSortDesc(arr)); // [72,33,20,10,5,2,1]

console.log("3 Smallest:", kSmallest(arr, 3)); // [1, 2, 5]
console.log("3 Largest:", kLargest(arr, 3));   // [72, 33, 20]