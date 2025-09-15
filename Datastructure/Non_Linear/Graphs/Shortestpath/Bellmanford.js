// Bellman–Ford (handles negative edges; detects negative cycle)

function bellmanFord(vertices, edges, src) {
  const dist = new Map(vertices.map(v=>[v, Infinity])); dist.set(src, 0);
  const n = vertices.length;
  for (let i=1;i<n;i++){
    let changed=false;
    for (const [u,v,w] of edges) {
      if (dist.get(u) + w < dist.get(v)) { dist.set(v, dist.get(u)+w); changed=true; }
    }
    if (!changed) break;
  }
  // detect negative cycle
  for (const [u,v,w] of edges) {
    if (dist.get(u) + w < dist.get(v)) return { dist:null, hasNegCycle:true };
  }
  return { dist, hasNegCycle:false };
}

// --- Example ---
const V = ['S','A','B','C'];
const E = [['S','A',1], ['A','B',2], ['B','C',-5], ['C','A',1]];
const bf = bellmanFord(V, E, 'S');
console.log("Bellman-Ford:", bf);
