// === KruskalMST.js ===
// Minimum Spanning Tree using Kruskal’s Algorithm + DSU
// Graph may be disconnected → Kruskal gives a forest (sum over components)

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
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
    return true;
  }
}

/**
 * Kruskal's MST
 * @param {number} n - number of vertices [0..n-1]
 * @param {Array<[number, number, number]>} edges - [u,v,w] edges
 * @returns {{weight: number, edges: Array<[number,number,number]>}}
 */
function kruskalMST(n, edges) {
  // 1) sort edges by weight
  const sorted = edges.slice().sort((a, b) => a[2] - b[2]);
  const dsu = new DSU(n);
  const mst = [];
  let total = 0;

  for (const [u, v, w] of sorted) {
    if (dsu.union(u, v)) {
      mst.push([u, v, w]);
      total += w;
      if (mst.length === n - 1) break; // MST complete for connected graph
    }
  }
  return { weight: total, edges: mst };
}

// --- Example ---
const n = 6;
// u, v, w
const edges = [
  [0,1,4],
  [0,2,4],
  [1,2,2],
  [2,3,3],
  [2,5,2],
  [2,4,4],
  [3,4,3],
  [5,4,3]
];
// One possible MST weight = 14 for this graph
const { weight, edges: mstEdges } = kruskalMST(n, edges);
console.log("MST total weight:", weight);
console.log("MST edges:", mstEdges);
