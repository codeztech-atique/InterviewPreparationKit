// Directed graphs with BFS and DFS

//                   7
//                   |
// 1 - 2 - 3 - 5 - 6
//             |
//            4


// 1,2,4,3,7,5,6

// Depth first Search - Always using stack
// Breath first Search - Always using queue

const adjacency = [
  { id: 2, goto: [{ id: 3 }] },
  { id: 1, goto: [{ id: 2 }] },
  { id: 4, goto: [{ id: 3 }] },
  { id: 6, goto: [] },
  { id: 3, goto: [{ id: 5 }] },
  { id: 7, goto: [{ id: 5 }] },
  { id: 5, goto: [{ id: 6 }] },
];


class DirectedGraph {
    constructor() {
        this.adjecencyList = adjacency;
    }

    // Always using Stack
    dfs() {

    }

    
}