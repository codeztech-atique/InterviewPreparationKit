class Graph {
    constructor() {
        this.adjecencyList = {};
        this.noOfNodes = 0;
    }

    addVertex(node) {
        this.adjecencyList[node] = [];
        this.noOfNodes++;
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

            for(const neighbor of this.adjecencyList[current]) {
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
            let current = stack.pop();
            if(!visited.has(current)) {
                visited.add(current);
                result.push(current);

                for(const neighbor of [...this.adjecencyList[current]].reverse()) {
                    if(!visited.has(neighbor)) {
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


console.log("BFS (from top):", myGraph.bfs());   // starts from '0'
console.log("BFS (from 3):", myGraph.bfs('3')); 

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