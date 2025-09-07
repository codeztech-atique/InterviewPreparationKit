function floydWarshall(vertices, edges) {
  const n=vertices.length, idx=new Map(vertices.map((v,i)=>[v,i]));
  const INF=1e15;
  const dist=Array.from({length:n},()=>Array(n).fill(INF));
  for(let i=0;i<n;i++) dist[i][i]=0;
  for(const [u,v,w] of edges){ dist[idx.get(u)][idx.get(v)] = Math.min(dist[idx.get(u)][idx.get(v)], w); }
  for(let k=0;k<n;k++) for(let i=0;i<n;i++) for(let j=0;j<n;j++) {
    const nd = dist[i][k]+dist[k][j]; if (nd < dist[i][j]) dist[i][j]=nd;
  }
  return dist;
}

// --- Example ---
const V2=['A','B','C','D'];
const E2=[['A','B',3],['A','C',8],['B','D',1],['C','D',2],['D','C',-4]];
console.log("Floyd-Warshall matrix:", floydWarshall(V2, E2));

