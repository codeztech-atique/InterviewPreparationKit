class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.size = 1;
    while (this.size < this.n) this.size <<= 1;
    this.seg = Array(2 * this.size).fill(0);

    // build leaves
    for (let i = 0; i < this.n; i++) this.seg[this.size + i] = arr[i];
    // build internal nodes
    for (let i = this.size - 1; i > 0; i--) this.seg[i] = this.seg[2*i] + this.seg[2*i + 1];
  }

  // set arr[idx] = val
  update(idx, val) {
    let p = this.size + idx;
    this.seg[p] = val;
    for (p >>= 1; p > 0; p >>= 1) this.seg[p] = this.seg[2*p] + this.seg[2*p + 1];
  }

  // sum on [l, r]
  query(l, r) {
    let res = 0;
    let L = this.size + l, R = this.size + r;
    while (L <= R) {
      if ((L & 1) === 1) res += this.seg[L++];
      if ((R & 1) === 0) res += this.seg[R--];
      L >>= 1; R >>= 1;
    }
    return res;
  }
}

// --- Quick demo ---
const st = new SegmentTree([1,2,3,4,5]);
console.log(st.query(1,3));  // 2+3+4 = 9
st.update(2, 13);            // [1,2,13,4,5]
console.log(st.query(1,3));  // 2+13+4 = 19
