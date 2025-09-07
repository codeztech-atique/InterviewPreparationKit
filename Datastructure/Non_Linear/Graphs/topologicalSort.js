class DirectedGraph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {}; // node -> array of outgoing neighbors
  }

  addVertex(node) {
    if (!(node in this.adjacentList)) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }

  addEdge(from, to) { // DIRECTED edge: from -> to
    if (!(from in this.adjacentList)) this.addVertex(from);
    if (!(to in this.adjacentList)) this.addVertex(to);
    this.adjacentList[from].push(to);
  }

  showConnections() {
    console.log(this.adjacentList);
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      console.log(node + " --> " + this.adjacentList[node].join(" "));
    }
  }

  // ---------- Cycle detection (directed) via DFS colors ----------
  // 0 = unvisited, 1 = visiting, 2 = done
  hasCycleDFS() {
    const color = {};
    for (const v of Object.keys(this.adjacentList)) color[v] = 0;

    const dfs = (u) => {
      color[u] = 1;
      for (const v of this.adjacentList[u]) {
        if (color[v] === 1) return true;       // back-edge -> cycle
        if (color[v] === 0 && dfs(v)) return true;
      }
      color[u] = 2;
      return false;
    };

    for (const v of Object.keys(this.adjacentList)) {
      if (color[v] === 0 && dfs(v)) return true;
    }
    return false;
  }

  // ---------- Topological Sort (Kahn's algorithm) ----------
  topologicalSortKahn() {
    // compute indegrees
    const indeg = {};
    const nodes = Object.keys(this.adjacentList);
    for (const u of nodes) indeg[u] = 0;
    for (const u of nodes) {
      for (const v of this.adjacentList[u]) {
        indeg[v] = (indeg[v] || 0) + 1;
      }
    }

    // queue of 0-indegree
    const q = [];
    for (const u of nodes) if (indeg[u] === 0) q.push(u);

    const order = [];
    while (q.length) {
      const u = q.shift();
      order.push(u);
      for (const v of this.adjacentList[u]) {
        indeg[v]--;
        if (indeg[v] === 0) q.push(v);
      }
    }

    const hasCycle = order.length !== nodes.length;
    return { order: hasCycle ? [] : order, hasCycle };
  }

  // ---------- Topological Sort (DFS postorder + reverse) ----------
  topologicalSortDFS() {
    const color = {}; // 0 unvisited, 1 visiting, 2 done
    const nodes = Object.keys(this.adjacentList);
    for (const u of nodes) color[u] = 0;
    const stack = [];
    let cycle = false;

    const dfs = (u) => {
      color[u] = 1;
      for (const v of this.adjacentList[u]) {
        if (color[v] === 1) { cycle = true; return; } // back-edge
        if (color[v] === 0) { dfs(v); if (cycle) return; }
      }
      color[u] = 2;
      stack.push(u); // postorder
    };

    for (const u of nodes) {
      if (color[u] === 0) { dfs(u); if (cycle) break; }
    }

    if (cycle) return { order: [], hasCycle: true };
    stack.reverse(); // reverse postorder
    return { order: stack, hasCycle: false };
  }
}

// ---- Demo (DAG) ----
// A -> C
// B -> C
// C -> D
// D -> E
const dag = new DirectedGraph();
dag.addEdge("A", "C");
dag.addEdge("B", "C");
dag.addEdge("C", "D");
dag.addEdge("D", "E");

dag.showConnections();
// Expect no cycle
console.log("Has cycle (DFS)?", dag.hasCycleDFS()); // false
console.log("Topo (Kahn):", dag.topologicalSortKahn()); // order like: [A,B,C,D,E]
console.log("Topo (DFS):", dag.topologicalSortDFS());   // same order up to tie-breaking

// ---- Demo (with cycle) ----
// add E -> B to create cycle B -> C -> D -> E -> B
dag.addEdge("E", "B");
console.log("Has cycle (DFS)?", dag.hasCycleDFS()); // true
console.log("Topo (Kahn):", dag.topologicalSortKahn()); // { order: [], hasCycle: true }
console.log("Topo (DFS):", dag.topologicalSortDFS());   // { order: [], hasCycle: true }
