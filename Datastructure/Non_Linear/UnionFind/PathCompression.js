// === PathCompression.js ===
// DSU with path compression in find()

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.components = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    this.parent[rb] = ra;
    this.components--;
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  count() { return this.components; }
}

// --- Example ---
const dsu = new DSU(6);
dsu.union(0,1);
dsu.union(2,3);
dsu.union(1,2);
console.log("connected(0,3):", dsu.connected(0,3)); // true
console.log("parent array:", dsu.parent);            // compressed paths
console.log("components:", dsu.count());             // 3
