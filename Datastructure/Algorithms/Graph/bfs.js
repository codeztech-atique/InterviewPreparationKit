class Graph {
    constructor() {
        this.adjecencyList = {};
        this.countNodes = 0;
    }

    addVertex(node) {
        this.adjecencyList[node] = [];
        this.countNodes++;
    }

    addEdge(node1, node2) {
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
            let current = queue.shift();
            result.push(current);

            for(let neighbor of this.adjecencyList[current]) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
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

console.log("DFS (from top):", myGraph.bfs());   // starts from '0'
console.log("DFS (from 3):", myGraph.bfs('3')); 