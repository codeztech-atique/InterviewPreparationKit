// Good Video - https://www.youtube.com/watch?v=N2P7w22tN9c

class Graph { 
  constructor() { 
    this.numberOfNodes = 0; 
    this.adjacentList = {}; 
  } 

  addVertex(node)  { 
    this.adjacentList[node] = []; 
    this.numberOfNodes++;
  } 

  addEdge(node1, node2) { 
    // undirected Graph 
    this.adjacentList[node1].push(node2); 
    this.adjacentList[node2].push(node1); 
  } 

  showConnections() {
    console.log(this.adjacentList);
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let connections = this.adjacentList[node].join(" ");
      console.log(node + "-->" + connections); 
    } 
  }

  // --- DFS (recursive) ---
  dfs(start) {
    if (!start) start = Object.keys(this.adjacentList)[0]; // default top
    const visited = new Set();
    const result = [];

    const dfsVisit = (node) => {
      visited.add(node);
      result.push(node);
      for (const neighbor of this.adjacentList[node]) {
        if (!visited.has(neighbor)) {
          dfsVisit(neighbor);
        }
      }
    };

    dfsVisit(start);
    return result;
  }

  dfsIterative(start) {
    if (!this.adjecencyList[start]) return [];

    let stack = [start];          // use stack instead of recursion
    let visited = new Set();
    let result = [];

    while (stack.length) {
      let currentNode = stack.pop();   // LIFO
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode);

        // Push neighbors to stack
        // (reverse ensures consistent order if you want left-to-right style)
        for (let neighbor of [...this.adjecencyList[currentNode]].reverse()) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
    return result;
  }

} 

// ---- Demo ----
var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections();

console.log("DFS (from top):", myGraph.dfs());   // starts from '0'
console.log("DFS (from 3):", myGraph.dfs('3')); 


// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

// DFS (from top): [ '0', '1', '3', '4', '2', '5', '6' ]
// DFS (from 3):   [ '3', '1', '2', '0', '4', '5', '6' ]