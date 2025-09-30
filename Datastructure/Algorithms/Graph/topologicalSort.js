// Youtube video - https://www.youtube.com/watch?v=3tkcfvCNtM8

// Topological Sort does not apply to undirected graph

// Why do we need topological sort?

// Topological sort gives a linear order of tasks where every edge u → v means u comes before v. It only applies to directed acyclic graphs (DAGs).

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

    topoSortDFS() {
        const visited = new Set(), inStack = new Set(), order = [];
        const nodes = Object.keys(this.adjacencyList).sort();

        const dfs = (u) => {
            if (inStack.has(u)) throw new Error("Cycle detected: not a DAG");
            if (visited.has(u)) return;
            inStack.add(u);
            for (const v of (this.adjacencyList[u] || []).slice().sort()) dfs(v);
            inStack.delete(u);
            visited.add(u);
            order.push(u);
        };

        for (const u of nodes) if (!visited.has(u)) dfs(u);
        return order.reverse();
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

// directedGrph.addEdges('3', '1');
// directedGrph.addEdges('3', '4');
// directedGrph.addEdges('4', '2');
// directedGrph.addEdges('4', '5');

// directedGrph.addEdges('1', '2');
// directedGrph.addEdges('1', '0');
// directedGrph.addEdges('0', '2');
// directedGrph.addEdges('6', '5');


directedGrph.addEdges('3', '1');
directedGrph.addEdges('3', '4');
directedGrph.addEdges('4', '2');
directedGrph.addEdges('4', '5');
directedGrph.addEdges('1', '2');
directedGrph.addEdges('1', '0');
directedGrph.addEdges('0', '2');
directedGrph.addEdges('6', '5');


console.log(directedGrph.showConnections());

console.log(directedGrph.topoSortDFS());