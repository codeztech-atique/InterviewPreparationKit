class UndirectedGraph {
  constructor() {
    this.adjecencyList = {};
    this.countNodes = 0;
  }

  addVertices(node) {
    this.adjecencyList[node] = [];
    this.count++;
  }

  addEdges(node1, node2) {
    this.adjecencyList[node1].push(node2);
    this.adjecencyList[node2].push(node1);
  }

  showConnections() {
    return this.adjecencyList;
  }

  bfs(start) {
    if(!start) start = Object.keys(this.adjecencyList)[0];
    let queue = [start];
    let result = [];
    let visited = new Set([start]);
    while(queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode);

      for(let neighbor of this.adjecencyList[currentNode]) {
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  dfs(start) {
    if(!start) start = Object.keys(this.adjecencyList)[0];
    let stack = [start];
    let result = [];
    let visited = new Set();

    while(stack.length) {
      let currentNode = stack.pop();
      if(!visited.has(currentNode)) {
        result.push(currentNode);
        visited.add(currentNode);

        for(const neighbor of [...this.adjecencyList[currentNode]].reverse()) {
          if(!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
    return result;
  }

}

const undirectedGrph = new UndirectedGraph();
undirectedGrph.addVertices('0');
undirectedGrph.addVertices('1');
undirectedGrph.addVertices('2');
undirectedGrph.addVertices('3');
undirectedGrph.addVertices('4');
undirectedGrph.addVertices('5');
undirectedGrph.addVertices('6');

undirectedGrph.addEdges('3', '1');
undirectedGrph.addEdges('3', '4');
undirectedGrph.addEdges('4', '2');
undirectedGrph.addEdges('4', '5');

undirectedGrph.addEdges('1', '2');
undirectedGrph.addEdges('1', '0');
undirectedGrph.addEdges('0', '2');
undirectedGrph.addEdges('6', '5');

console.log("BFS:", undirectedGrph.bfs());
console.log("BFS:", undirectedGrph.bfs('3'));

console.log("DFS:", undirectedGrph.dfs());
console.log("DFS:", undirectedGrph.dfs('3'));

console.log(undirectedGrph.showConnections());