// Connectivity with Union–Find (components / dynamic connectivity)

// Count connected components in an undirected graph with DSU
function countComponents(vertices, edges /* [u,v] */) {
  const dsu = new DSU(vertices);
  const id = (x)=>dsu.ids.get(x);
  for (const [u,v] of edges) dsu.union(id(u), id(v));
  return dsu.count;
}

// --- Example ---
const CV=['0','1','2','3','4','5','6'];
const CE=[['3','1'],['3','4'],['4','2'],['4','5'],['1','2'],['1','0'],['0','2'],['6','5']];
console.log("Connected components:", countComponents(CV, CE)); // 1
