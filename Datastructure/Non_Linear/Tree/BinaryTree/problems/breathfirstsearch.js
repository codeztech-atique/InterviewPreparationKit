// Directed graphs with BFS and DFS

//             f
//             |
// a - b - c - e - g
//         |
//         d


            //     a 
            //      \
            //       b
            //        \
            //         c
            //        /  \
            //       d    e
            //           /  \
            //          g    f

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
  

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DirectedGraph {
    constructor() {
        this.adjecencyList = adjacency;
    }
  
    // Always using Stack
    bfs() {

    }      
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.right = b;
b.right = c;
c.left = d;
c.right = e;
e.left = g;
e.right = f;

const dfsInorder = (root) => {
   let result = [];
   let searchTree = node => {
      if(node.left) searchTree(node.left);
      result.push(node.value);
      if(node.right) searchTree(node.right);
   }
   searchTree(root);
   return result;
}

const dfsPreorder = (root) => {
    let result = [];
    let searchTree = node => {
        result.push(node.value);
       if(node.left) searchTree(node.left);
       if(node.right) searchTree(node.right);
    }
    searchTree(root);
    return result;
}

const dfsPostorder = (root) => {
    let result = [];
    let searchTree = node => {
       if(node.left) searchTree(node.left);
       if(node.right) searchTree(node.right);
       result.push(node.value);
    }
    searchTree(root);
    return result;
}

const bfs = (root) => {
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.value);

        if(currentNode.left) {
            queue.push(currentNode.left);
        }

        if(currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
}

console.log("DFS Inorder:", dfsInorder(a));
console.log("DFS Preorder:", dfsPreorder(a));
console.log("DFS Postorder:", dfsPostorder(a));

console.log("BFS:", bfs(a));


