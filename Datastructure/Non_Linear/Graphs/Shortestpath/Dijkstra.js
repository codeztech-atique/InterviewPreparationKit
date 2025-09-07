// Dijkstra (non-negative weights)

class MinPQ {
  constructor() { this.a = []; }
  push(x) { this.a.push(x); this._up(this.a.length - 1); }
  _up(i) { while (i) { const p=(i-1)>>1; if (this.a[p][0] <= this.a[i][0]) break; [this.a[p],this.a[i]]=[this.a[i],this.a[p]]; i=p; } }
  pop() { if (!this.a.length) return null; const top=this.a[0]; const x=this.a.pop(); if (this.a.length){ this.a[0]=x; this._down(0);} return top; }
  _down(i){ for(;;){ let l=i*2+1,r=l+1,sm=i; if(l<this.a.length&&this.a[l][0]<this.a[sm][0]) sm=l; if(r<this.a.length&&this.a[r][0]<this.a[sm][0]) sm=r; if(sm===i)break; [this.a[i],this.a[sm]]=[this.a[sm],this.a[i]]; i=sm; } }
  get size(){ return this.a.length; }
}

class WeightedGraph {
  constructor() { this.adj=new Map(); }
  addEdge(u,v,w,undirected=false){ if(!this.adj.has(u)) this.adj.set(u,[]); if(!this.adj.has(v)) this.adj.set(v,[]); this.adj.get(u).push([v,w]); if(undirected) this.adj.get(v).push([u,w]); }
  neighbors(u){ return this.adj.get(u)||[]; }
  vertices(){ return Array.from(this.adj.keys()); }
}

function dijkstra(G, src) {
  const dist=new Map(), prev=new Map();
  for (const v of G.vertices()) dist.set(v, Infinity);
  dist.set(src, 0);
  const pq=new MinPQ(); pq.push([0, src]);
  while (pq.size) {
    const [d,u]=pq.pop();
    if (d!==dist.get(u)) continue;
    for (const [v,w] of G.neighbors(u)) {
      const nd=d+w;
      if (nd<dist.get(v)) { dist.set(v, nd); prev.set(v, u); pq.push([nd, v]); }
    }
  }
  return { dist, prev };
}

// --- Example ---
const wg = new WeightedGraph();
wg.addEdge('A','B',4,true); wg.addEdge('A','C',2,true);
wg.addEdge('C','B',1,true); wg.addEdge('B','D',5,true);
wg.addEdge('C','D',8,true); wg.addEdge('C','E',10,true);
wg.addEdge('D','E',2,true); wg.addEdge('D','Z',6,true);
wg.addEdge('E','Z',3,true);

const { dist, prev } = dijkstra(wg, 'A');
console.log("Dijkstra dist from A:", Object.fromEntries(dist));
const pathToZ = (()=>{ const path=[]; let cur='Z'; while(cur){ path.push(cur); cur=prev.get(cur); } return path.reverse(); })();
console.log("Path A->Z:", pathToZ);
