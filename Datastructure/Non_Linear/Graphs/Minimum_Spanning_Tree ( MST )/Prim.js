// Prim (with Min-Heap, adjacency list)

function primMST(G, start) {
  const visited=new Set(), pq=new MinPQ(), mst=[];
  visited.add(start);
  for (const [v,w] of G.neighbors(start)) pq.push([w, start, v]); // [weight,u,v]
  while (pq.size) {
    const [w,u,v]=pq.pop();
    if (visited.has(v)) continue;
    visited.add(v);
    mst.push([u,v,w]);
    for (const [x,wx] of G.neighbors(v)) if (!visited.has(x)) pq.push([wx, v, x]);
  }
  return mst;
}

// --- Example ---
console.log("Prim MST from A:", primMST(wg, 'A'));
