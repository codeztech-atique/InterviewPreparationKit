// === Basic.js ===
// Bare-bones DSU: find, union, connected (no optimizations)

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.components = n; // number of disjoint sets
  }

  find(x) {
    while (x !== this.parent[x]) x = this.parent[x];
    return x;
  }

  union(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;      // already in same set
    this.parent[rb] = ra;             // attach rb's root to ra
    this.components--;
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  count() { return this.components; }
}

// --- Example ---
const dsu = new DSU(5); // 0..4
console.log("Initially components:", dsu.count()); // 5
dsu.union(0,1);
dsu.union(1,2);
console.log("connected(0,2):", dsu.connected(0,2)); // true
console.log("connected(0,3):", dsu.connected(0,3)); // false
console.log("components:", dsu.count());            // 3
