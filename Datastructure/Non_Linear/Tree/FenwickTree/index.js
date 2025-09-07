class Fenwick {
  constructor(nOrArr) {
    if (Array.isArray(nOrArr)) {
      this.n = nOrArr.length;
      this.bit = Array(this.n + 1).fill(0);
      this.arr = nOrArr.slice();                // keep original values for set()
      // O(n log n) build (fine for interviews)
      for (let i = 0; i < this.n; i++) this.add(i, this.arr[i]);
    } else {
      this.n = nOrArr;
      this.bit = Array(this.n + 1).fill(0);
      this.arr = Array(this.n).fill(0);
    }
  }
  // add 'delta' to a[i] (0-based)
  add(i, delta) {
    this.arr[i] += delta;
    for (let x = i + 1; x <= this.n; x += x & -x) this.bit[x] += delta;
  }
  // set a[i] = value
  set(i, value) {
    const delta = value - this.arr[i];
    this.add(i, delta);
  }
  // prefix sum a[0..i]
  sum(i) {
    let res = 0;
    for (let x = i + 1; x > 0; x -= x & -x) res += this.bit[x];
    return res;
  }
  // range sum a[l..r]
  rangeSum(l, r) {
    if (l > r) return 0;
    return this.sum(r) - (l > 0 ? this.sum(l - 1) : 0);
  }
  // Given k (1-based), find smallest idx s.t. prefix sum >= k.
  // Requires all values non-negative (typical freq-table use).
  kthPrefix(k) {
    let idx = 0;
    // Largest power of two >= n
    let bitMask = 1;
    while (bitMask << 1 <= this.n) bitMask <<= 1;
    for (let step = bitMask; step > 0; step >>= 1) {
      const next = idx + step;
      if (next <= this.n && this.bit[next] < k) {
        k -= this.bit[next];
        idx = next;
      }
    }
    return (idx < this.n) ? idx : -1; // returns 0-based index; -1 if not found
  }
}

// --- Quick demo ---
const ft = new Fenwick([1,2,3,4,5]);     // arr = [1,2,3,4,5]
console.log(ft.rangeSum(1,3));           // 2+3+4 = 9
ft.add(2, +10);                          // arr[2] becomes 13
console.log(ft.rangeSum(1,3));           // 2+13+4 = 19
ft.set(4, 100);                          // arr[4] = 100
console.log(ft.rangeSum(0,4));           // 1+2+13+4+100 = 120

// Frequency-table style (find kth by prefix)
const freq = new Fenwick(10);
freq.add(3, 5); // value “3” appears 5 times
freq.add(7, 2); // value “7” appears 2 times
// total 7 items, the 6th item in sorted order is index 7
console.log(freq.kthPrefix(6));          // -> 7
