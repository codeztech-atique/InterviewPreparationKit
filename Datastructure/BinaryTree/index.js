// Lookup - O(log n) -> Balanced
// Insert - O(log n) -> Balanced
// Delete - O(log n) -> Balanced

// Lookup - O(n) -> UnBalanced
// Insert - O(n) -> UnBalanced
// Delete - O(n) -> UnBalanced

// No of Nodes in Binary Tree, and So On - 

// Level 0 : 2^0 = 1;
// Level 1 : 2^1 = 2;
// Level 2 : 2^2 = 4;
// Level 3 : 2^3 = 8;

// Total No of Nodes - (2^4 - 1) = 15 nodes (if 4 level, if 3 level (2^3 -1) = 7 nodes)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
      return this.count;
    }
    
    insert(value) {
      this.count++;
      let newNode = new Node(value);
      const searchTree = node => {
        // if value < node.value go left
        if(value < node.value) {
          // If not left child append new node
          if(!node.left) {
              node.left = newNode;
          }
          // If there is a left child call the same fucntion again, so its a recursive case  
          else {
              searchTree(node.left);
          }   
        } 
        
        // if value > node.value go right
        else if(value > node.value) {
            // If not right child append new node
            if(!node.right) {
                node.right = newNode;
            }
            // If there is a right child call the same fucntion again, so its a recursive case  
            else {
                searchTree(node.right);
            }   
        }
        
      }
      searchTree(this.root); //to call the search tree function
    }
    
    min() {
      // Continue traversing left until no more children
      let currentNode = this.root;
      while(currentNode.left) {
          currentNode = currentNode.left;
      }  
      return currentNode.value;
    }

    max() {
      // Continue traversing right until no more children
      let currentNode = this.root;
      while(currentNode.right) {
          currentNode = currentNode.right;
      }
      return currentNode.value;
    }

    lookup(value) { //checks wheather's it exists in a tree
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            }
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        // If no value found - 
        return false
    }
    
    //        15
    //      /    \
    //     3      36
    //    /  \   /  \
    //   2   12 28  39
    
    // Depth first search - Looking branch by branch
     
    // Inorder
    // Left, Root, Right
    // 2,3,12,15,28,36,39
    dfsInorder() {
        let result = [];
        const traverse = node => {
           // If left node exists go left again 
           if(node.left) traverse(node.left)
           // capture the root node value
           result.push(node.value);
           // If right node exists go left again 
           if(node.right) traverse(node.right);   
        };
        traverse(this.root);
        return result;
    }

    //        15
    //      /    \
    //     3      36
    //    /  \   /  \
    //   2   12 28  39

    // Preorder
    // Root, Left, Right
    // 15,3,2,12,36,28,39
    dfsPreorder() {
        let result = [];
        const traverse = node => {
           // capture the root node value
           result.push(node.value);

           // If left node exists go left again 
           if(node.left) traverse(node.left)
           
           // If right node exists go left again 
           if(node.right) traverse(node.right);   
        };
        traverse(this.root);
        return result;
    }

    //        15
    //      /    \
    //     3      36
    //    /  \   /  \
    //   2   12 28  39

    // PostOrder
    // left, right, root
    // 2,12,3,28,39,36,15
    dfsPostorder() {
        let result = [];
        const traverse = node => {
           // If left node exists go left again 
           if(node.left) traverse(node.left)
           
           // If right node exists go left again 
           if(node.right) traverse(node.right);

           // capture the root node value
           result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

    //        15
    //      /    \
    //     3      36
    //    /  \   /  \
    //   2   12 28  39

    // Breath First Search - Looking level by level
    // We will be using Queue - Except the result level by level
    // 15, 3, 36, 2, 12, 28, 39
    bfs() {
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length) {
            let currentNode = queue.shift()

            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

const bst = new BinarySearchTree(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.size());

console.log(bst.min());
console.log(bst.max());

// console.log(bst.lookup(2));
// console.log(bst.lookup(9));

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
console.log(bst.dfsInorder());

// pre-order: 15, 3, 2, 12, 36, 28, 39
console.log(bst.dfsPreorder());

// post-order: 2, 12, 3, 28, 39, 36, 15
console.log(bst.dfsPostorder());

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
console.log(bst.bfs());


//       1
//     /   \ 
//    2     3 
//   / \   /  \
//  4   5 6    7
//         \
//          8 

//       1
//        \
//         3
//       / 
//      6
//       \
//        8  
