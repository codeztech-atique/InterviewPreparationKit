// === UnionByRank.js ===
// DSU with path compression + union by rank (or size)

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);   // rank-based
    // Alternatively: this.size = Array(n).fill(1); // size-based
    this.components = n;
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  // Union by rank (tie-breaker increases rank)
  union(a, b) {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) {
      [ra, rb] = [rb, ra];
    }
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
    this.components--;
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  count() { return this.components; }
}

// --- Example ---
const dsu = new DSU(7);
dsu.union(0,1);
dsu.union(1,2);
dsu.union(3,4);
dsu.union(5,6);
dsu.union(2,4);
console.log("connected(0,4):", dsu.connected(0,4)); // true
console.log("connected(0,5):", dsu.connected(0,5)); // false
console.log("components:", dsu.count());             // 2
console.log("parent:", dsu.parent);
console.log("rank:", dsu.rank);
