class SegmentTreeLazy {
  constructor(arr) {
    this.n = arr.length;
    this.size = 1;
    while (this.size < this.n) this.size <<= 1;
    this.seg = Array(2 * this.size).fill(0);   // sums
    this.lazy = Array(2 * this.size).fill(0);  // pending additions

    // build leaves
    for (let i = 0; i < this.n; i++) this.seg[this.size + i] = arr[i];
    // build parents
    for (let i = this.size - 1; i > 0; i--) this.seg[i] = this.seg[2*i] + this.seg[2*i + 1];
  }

  // apply add 'val' to node p covering len elements
  #apply(p, val, len) {
    this.seg[p] += val * len;
    this.lazy[p] += val;
  }

  // push lazy value from p to children
  #push(p, len) {
    if (this.lazy[p] !== 0 && p < this.size) {
      const add = this.lazy[p];
      this.lazy[p] = 0;
      const left = 2*p, right = 2*p + 1;
      const half = len >> 1;
      this.#apply(left, add, half);
      this.#apply(right, add, half);
    }
  }

  // range add [l, r] by val
  addRange(l, r, val, p=1, nl=0, nr=this.size-1) {
    if (l > nr || r < nl) return;
    if (l <= nl && nr <= r) {
      this.#apply(p, val, nr - nl + 1);
      return;
    }
    this.#push(p, nr - nl + 1);
    const mid = (nl + nr) >> 1;
    this.addRange(l, r, val, 2*p, nl, mid);
    this.addRange(l, r, val, 2*p+1, mid+1, nr);
    this.seg[p] = this.seg[2*p] + this.seg[2*p+1];
  }

  // range sum [l, r]
  query(l, r, p=1, nl=0, nr=this.size-1) {
    if (l > nr || r < nl) return 0;
    if (l <= nl && nr <= r) return this.seg[p];
    this.#push(p, nr - nl + 1);
    const mid = (nl + nr) >> 1;
    return this.query(l, r, 2*p, nl, mid) + this.query(l, r, 2*p+1, mid+1, nr);
  }

  // point set: arr[idx] = val  (implemented via reading current, adding delta)
  setPoint(idx, val) {
    const cur = this.query(idx, idx);
    const delta = val - cur;
    this.addRange(idx, idx, delta);
  }
}

// --- Quick demo ---
const stl = new SegmentTreeLazy([1,2,3,4,5]); // [1,2,3,4,5]
console.log(stl.query(0,4));   // 15
stl.addRange(1,3, +10);        // [1,12,13,14,5]
console.log(stl.query(1,3));   // 12+13+14 = 39
stl.setPoint(2, 7);            // [1,12,7,14,5]
console.log(stl.query(0,4));   // 1+12+7+14+5 = 39
