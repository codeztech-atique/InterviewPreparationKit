// Youtube video - https://www.youtube.com/watch?v=3tkcfvCNtM8

// Topological Sort does not apply to undirected graph

class DirectedGraph {
  constructor() {
        // Use a clean object to avoid prototype keys
        this.adjacencyList = Object.create(null);
        this.countNodes = 0;
    }

    addVertices(node) {
        if (!(node in this.adjacencyList)) {
            this.adjacencyList[node] = [];
            this.countNodes++;
        }
    }

    addEdges(u, v) { // u -> v
        if (!(u in this.adjacencyList)) this.addVertices(u);
        if (!(v in this.adjacencyList)) this.addVertices(v);
        this.adjacencyList[u].push(v);
    }

    showConnections() {
        return this.adjacencyList;
    }

  // --------------------------------
  // Topological Sort (Kahn's Algorithm)
  // --------------------------------
  // (Optional) Kahn’s algorithm if you want it here too:
  topoSortKahn() {
    const indeg = Object.create(null);
    for (const u of Object.keys(this.adjacencyList)) indeg[u] = 0;
    for (const u of Object.keys(this.adjacencyList)) {
      for (const v of this.adjacencyList[u]) {
        indeg[v] = (indeg[v] ?? 0) + 1;
      }
    }
    const q = [];
    for (const [node, d] of Object.entries(indeg)) if (d === 0) q.push(node);

    const order = [];
    while (q.length) {
      const u = q.shift();
      order.push(u);
      for (const v of this.adjacencyList[u] || []) {
        indeg[v]--;
        if (indeg[v] === 0) q.push(v);
      }
    }
    if (order.length !== Object.keys(this.adjacencyList).length) {
      throw new Error("Cycle detected: not a DAG");
    }
    return order;
  }
}

const directedGrph = new DirectedGraph();
directedGrph.addVertices('0');
directedGrph.addVertices('1');
directedGrph.addVertices('2');
directedGrph.addVertices('3');
directedGrph.addVertices('4');
directedGrph.addVertices('5');
directedGrph.addVertices('6');

directedGrph.addEdges('3', '1');
directedGrph.addEdges('3', '4');
directedGrph.addEdges('4', '2');
directedGrph.addEdges('4', '5');

directedGrph.addEdges('1', '2');
directedGrph.addEdges('1', '0');
directedGrph.addEdges('0', '2');
directedGrph.addEdges('6', '5');


console.log(directedGrph.showConnections());
console.log(directedGrph.topoSortKahn());