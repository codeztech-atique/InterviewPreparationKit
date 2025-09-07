// Kruskal (with Union–Find)

class DSU {
  constructor(nOrItems) {
    if (Array.isArray(nOrItems)) {
      this.ids = new Map(nOrItems.map((v,i)=>[v,i]));
      const n=nOrItems.length;
      this.parent=Array.from({length:n},(_,i)=>i);
      this.size=Array(n).fill(1);
      this.count=n;
    } else {
      const n=nOrItems; this.parent=Array.from({length:n},(_,i)=>i); this.size=Array(n).fill(1); this.count=n;
    }
  }
  find(i){ while(i!==this.parent[i]){ this.parent[i]=this.parent[this.parent[i]]; i=this.parent[i]; } return i; }
  union(i,j){ i=this.find(i); j=this.find(j); if(i===j) return false; if(this.size[i]<this.size[j]) [i,j]=[j,i]; this.parent[j]=i; this.size[i]+=this.size[j]; this.count--; return true; }
}

function kruskalMST(vertices, edges /* [u,v,w] */) {
  const dsu = new DSU(vertices);
  const id = (x)=>dsu.ids.get(x);
  const E = edges.slice().sort((a,b)=>a[2]-b[2]);
  const mst=[], n=vertices.length;
  for (const [u,v,w] of E) {
    if (dsu.union(id(u), id(v))) mst.push([u,v,w]);
    if (mst.length === n-1) break;
  }
  return mst;
}

// --- Example ---
const KV=['A','B','C','D','E','F'];
const KE=[['A','B',4],['A','F',2],['B','C',6],['B','F',5],['C','D',3],['D','E',2],['E','F',4],['C','F',1]];
console.log("Kruskal MST:", kruskalMST(KV, KE));
