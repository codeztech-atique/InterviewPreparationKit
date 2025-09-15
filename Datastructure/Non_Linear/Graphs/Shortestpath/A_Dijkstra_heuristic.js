// A* for general graph: needs a heuristic h(v) estimating dist to goal (admissible).
function aStar(G, start, goal, h) {
  const open=new MinPQ();
  const g=new Map(), f=new Map(), prev=new Map();
  for (const v of G.vertices()) { g.set(v, Infinity); f.set(v, Infinity); }
  g.set(start,0); f.set(start,h(start));
  open.push([f.get(start), start]);
  const inOpen = new Set([start]);

  while (open.size) {
    const [,u]=open.pop();
    if (u===goal) break;
    inOpen.delete(u);
    for (const [v,w] of G.neighbors(u)) {
      const tentative = g.get(u)+w;
      if (tentative < g.get(v)) {
        g.set(v, tentative);
        f.set(v, tentative + h(v));
        prev.set(v, u);
        if (!inOpen.has(v)) { open.push([f.get(v), v]); inOpen.add(v); }
      }
    }
  }
  // reconstruct path
  const path=[]; let cur=goal;
  if (g.get(goal)===Infinity) return { path:[], cost:Infinity };
  while(cur!==undefined){ path.push(cur); cur=prev.get(cur); }
  return { path:path.reverse(), cost:g.get(goal) };
}

// --- Example (use zero heuristic => Dijkstra) ---
const zeroH = () => 0;
console.log("A* A->Z:", aStar(wg, 'A', 'Z', zeroH));
