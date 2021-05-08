class UndirectedGraph {
   constructor() {
     this.noOfEdges = 0;
     this.adjecentList = {};
   }
   addVertices(node) {
    this.adjecentList[node] = [];
    this.noOfEdges++;
   }
   addEdges(node1, node2) {
     this.adjecentList[node1].push(node2);
     this.adjecentList[node2].push(node1);
   }
   showConnections() {
     console.log(this.adjecentList);
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

undirectedGrph.showConnections();