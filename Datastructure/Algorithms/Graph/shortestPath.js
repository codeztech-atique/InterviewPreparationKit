// Sortest Path using dijkstras

class Heap {
  constructor(cmp = (a, b) => a - b) {
    this.data = [];
    this.cmp = cmp; // <0 means a has higher priority than b
  }
  size() { return this.data.length; }
  peek() { return this.data[0]; }

  push(val) {
    this.data.push(val);
    this.#siftUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) return undefined;
    this.#swap(0, this.size() - 1);
    const out = this.data.pop();
    this.#siftDown(0);
    return out;
  }

  #siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.cmp(this.data[i], this.data[p]) < 0) {
        this.#swap(i, p);
        i = p;
      } else break;
    }
  }

  #siftDown(i) {
    const n = this.size();
    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let best = i;
      if (l < n && this.cmp(this.data[l], this.data[best]) < 0) best = l;
      if (r < n && this.cmp(this.data[r], this.data[best]) < 0) best = r;
      if (best !== i) {
        this.#swap(i, best);
        i = best;
      } else break;
    }
  }

  #swap(i, j) { [this.data[i], this.data[j]] = [this.data[j], this.data[i]]; }
}

// Helpers to make min-/max- heaps quickly
exports.minHeap = (cmp) => new Heap(cmp ?? ((a, b) => a - b));
exports.maxHeap = (cmp) => new Heap(cmp ?? ((a, b) => b - a));




class WeightedGraph {
  constructor(directed = true) {
    this.adj = Object.create(null);
    this.directed = directed;
  }

  addVertex(u) {
    if (!(u in this.adj)) this.adj[u] = [];
  }

  addEdge(u, v, w = 1) {
    this.addVertex(u); this.addVertex(v);
    this.adj[u].push([v, w]);
    if (!this.directed) this.adj[v].push([u, w]);
  }

  dijkstra(source) {
    const dist = Object.create(null);
    const prev = Object.create(null);

    for (const u of Object.keys(this.adj)) dist[u] = Infinity;
    dist[source] = 0;

    // Use your Heap here
    const pq = new Heap((a, b) => a[0] - b[0]);
    pq.push([0, source]);

    while (pq.size() > 0) {
      const [d, u] = pq.pop();
      if (d !== dist[u]) continue; // stale entry

      for (const [v, w] of this.adj[u]) {
        const nd = d + w;
        if (nd < dist[v]) {
          dist[v] = nd;
          prev[v] = u;
          pq.push([nd, v]);
        }
      }
    }
    return { dist, prev };
  }

  // Helper to rebuild path
  buildPath(prev, target) {
    const path = [];
    let cur = target;
    while (cur !== undefined) {
      path.push(cur);
      cur = prev[cur];
    }
    return path.reverse();
  }
}





const g = new WeightedGraph(true);

g.addEdge('3','1',2);
g.addEdge('3','4',1);
g.addEdge('4','2',4);
g.addEdge('4','5',6);
g.addEdge('1','2',1);
g.addEdge('1','0',3);
g.addEdge('0','2',2);
g.addEdge('6','5',1);

const { dist, prev } = g.dijkstra('3');

console.log("Distances:", dist);
console.log("Shortest path 3 -> 2:", g.buildPath(prev, '2'));