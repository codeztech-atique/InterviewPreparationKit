// === Applications.js ===
// Cycle detection (undirected), connected components (using DSU)

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
    this.components = n;
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
    this.components--;
    return true;
  }
  connected(a, b) { return this.find(a) === this.find(b); }
  count() { return this.components; }
}

// 1) Cycle detection in an **undirected** graph using DSU
// n = number of vertices [0..n-1], edges = [[u,v],...]
function hasCycleUndirected(n, edges) {
  const dsu = new DSU(n);
  for (const [u, v] of edges) {
    if (!dsu.union(u, v)) return true; // same set already -> cycle
  }
  return false;
}

// 2) Connected components (undirected)
function connectedComponents(n, edges) {
  const dsu = new DSU(n);
  for (const [u, v] of edges) dsu.union(u, v);
  // Group vertices by root
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const r = dsu.find(i);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(i);
  }
  return Array.from(groups.values());
}

// --- Examples ---

// A) Cycle detection
const n1 = 5;
const edges1 = [[0,1],[1,2],[2,3],[3,4]];      // no cycle
const edges2 = [[0,1],[1,2],[2,3],[3,1]];      // has cycle (1-2-3-1)
console.log("hasCycleUndirected(edges1):", hasCycleUndirected(n1, edges1)); // false
console.log("hasCycleUndirected(edges2):", hasCycleUndirected(4, edges2));  // true

// B) Connected components
const n2 = 7;
const edges3 = [[0,1],[1,2],[3,4],[5,6]];
// Components: [0,1,2], [3,4], [5,6]
console.log("connectedComponents:", connectedComponents(n2, edges3));
