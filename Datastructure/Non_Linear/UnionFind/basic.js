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

  hasCycleUndirected(n, edges) {
    const dsu = new DSU(n);
    for(const [u, v] of edges) {
      if(!dsu.union(u, v)) return true;
    }
    return false;
  }
}

// --- Example ---
const dsu = new DSU(5); // 0..4
console.log("Initially components:", dsu.count()); // 5
dsu.union(0,1);
dsu.union(1,2);
console.log("connected(0,2):", dsu.connected(0,2)); // true
console.log("connected(0,3):", dsu.connected(0,3)); // false
console.log("components:", dsu.count());            // 3


// Has Cycle - 

const edges1 = [[0,1],[1,2],[2,3],[3,4]];      // no cycle
const edges2 = [[0,1],[1,2],[2,3],[3,1]];      // has cycle (1-2-3-1)
console.log("hasCycleUndirected(edges1):", dsu.hasCycleUndirected(5, edges1)); // false
console.log("hasCycleUndirected(edges2):", dsu.hasCycleUndirected(4, edges2));  // true
