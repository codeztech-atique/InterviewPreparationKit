class UndirectedGraph {
    constructor() {
      this.adjecencyList = {};
      this.noOfEdges = 0;
    }

    addVertices(node) {
      this.adjecencyList[node] = [];
    }

    addEdges(node1, node2) {
      this.adjecencyList[node1].push(node2);
      this.adjecencyList[node2].push(node1);
    }

    showConnections() {
      return this.adjecencyList;
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

console.log(undirectedGrph.showConnections());