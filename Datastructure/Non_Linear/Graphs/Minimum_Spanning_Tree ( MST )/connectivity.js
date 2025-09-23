// Connectivity with Union–Find (components / dynamic connectivity)

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
