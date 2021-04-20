// Lookup - O(log n) -> Balanced
// Insert - O(log n) -> Balanced
// Delete - O(log n) -> Balanced

const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");


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
   insert(value) {
      this.count++;
      let newNode = new Node(value);
      const traverse = node => {
         if(value < node.value) {
            if(!node.left) {
               node.left = newNode;
            } else {
               traverse(node.left);
            }
         } else if(value > node.value) {
            if(!node.right) {
               node.right = newNode;
            } else {
               traverse(node.right);
            }
         }
      }
      traverse(this.root);
   }
   size() {
      return this.count;
   }
   min() {
      let currentNode = this.root;
      while(currentNode.left) {
         currentNode = currentNode.left;
      }
      return currentNode.value;
   }
   max() {
      let currentNode = this.root;
      while(currentNode.right) {
         currentNode = currentNode.right;
      }
      return currentNode.value;
   }

   lookup(value) {
      let currentNode = this.root;
      while(currentNode) {
         if(value === currentNode.value) {
            return true;
         } else if(value < currentNode.value) {
            currentNode = currentNode.left
         } else {
            currentNode = currentNode.right;
         }
      }
      return false
   }
   
   dfsInorder() {
      // left, middle, right
      //        15
      //      /    \
      //     3      36
      //    /  \   /  \
      //   2   12 28  39
      
      // Output = 2,3,12,15,28,36,39
      let result = [];
      const searchTree = node => {
         if(node.left) searchTree(node.left);
         result.push(node.value);
         if(node.right) searchTree(node.right);
      }
      searchTree(this.root);
      return result;
   }
   dfsPreorder() {
      // middle, left, right
      //        15
      //      /    \
      //     3      36
      //    /  \   /  \
      //   2   12 28  39
      
      // Output = 15,3,2,12,36,28,39
      let result = [];
      const searchTree = node => {
         result.push(node.value);
         if(node.left) searchTree(node.left);
         if(node.right) searchTree(node.right);
      }
      searchTree(this.root);
      return result;
   }
   dfsPostorder() {
      // left, right, middle
      //        15
      //      /    \
      //     3      36
      //    /  \   /  \
      //   2   12 28  39    
      
      // Output = 2,12,3,15,36,28,39
      let result = [];
      const searchTree = node => {
         if(node.left) searchTree(node.left);
         if(node.right) searchTree(node.right);
         result.push(node.value);
      }
      searchTree(this.root);
      return result;
   }
   bfs() {
      //        15
      //      /    \
      //     3      36
      //    /  \   /  \
      //   2   12 28  39    
      // Output - 15,3,36,2,12,28,39
      let result = [];
      let queue = []
      queue.push(this.root)
      while(queue.length) {
         let currentNode = queue.shift();
         result.push(currentNode.value);
         if(currentNode.left) {
            queue.push(currentNode.left);
         }
         if (currentNode.right) {
            queue.push(currentNode.right)
        }
      }
      return result;
   }
}


const bst = new BinarySearchTree(15)
bst.insert(112)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

// const bst = new BinarySearchTree(1)
// bst.insert(3)
// bst.insert(6)
// bst.insert(8)

console.log("BST Size: ",bst.size());

console.log("BST Min: ",bst.min());
console.log("BST Max: ",bst.max());

console.log("Is Found 2: ",bst.lookup(2));
console.log("Is Found 9: ",bst.lookup(9));

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
console.log("Inorder:",bst.dfsInorder());

// pre-order: 15, 3, 2, 12, 36, 28, 39
console.log("Preorder:",bst.dfsPreorder());

// post-order: 2, 12, 3, 28, 39, 36, 15
console.log("Postorder:",bst.dfsPostorder());

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
console.log("BFS:",bst.bfs());

function getLeafCountOfBinaryTree(node) {
   if(node === null) return 0;
   if(node.left === null && node.right === null) return 1;
   return getLeafCountOfBinaryTree(node.left) + getLeafCountOfBinaryTree(node.right);
}
console.log("COUNT LEAF NODE: ", getLeafCountOfBinaryTree(bst.root));

function hightOfBinaryTree(node) {
   if(node == null) {
      return 0;
   }  else {
      let lDepth = hightOfBinaryTree(node.left);
      let rDepth = hightOfBinaryTree(node.right);
      if (lDepth > rDepth)
         return (lDepth + 1);
      else
         return (rDepth + 1);
   }
}

console.log("HIGHT OF BINARY TREE: ", hightOfBinaryTree(bst.root));
