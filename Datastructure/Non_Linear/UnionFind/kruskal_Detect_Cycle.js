class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }
  union(a, b) {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
    return true;
  }
}

// edges: array of [u, v, w]
function kruskalMST(n, edges) {
  // 1) sort by weight
  edges.sort((a, b) => a[2] - b[2]);

  const dsu = new DSU(n);
  let total = 0;
  const chosen = [];

  // 2) pick edges in increasing weight if they connect different components
  for (const [u, v, w] of edges) {
    if (dsu.union(u, v)) {
      total += w;
      chosen.push([u, v, w]);
      if (chosen.length === n - 1) break; // MST complete (for connected graphs)
    }
  }

  // 3) if we picked fewer than n-1 edges, graph was disconnected → minimum spanning forest
  const isConnected = (chosen.length === n - 1);

  return { totalWeight: total, edges: chosen, isConnected };
}

// Example:
const n = 5;
const weightedEdges = [
  [0,1,1],[1,2,2],[2,3,3],[3,4,4],[0,4,10],[1,3,5]
];
console.log(kruskalMST(n, weightedEdges));
// => { totalWeight: 10, edges: [...4 edges...], isConnected: true }
