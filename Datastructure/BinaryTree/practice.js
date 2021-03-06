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

//        10
//      /    \
//     5      19
//    /  \   /  \
//   1    6 17  21

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
      let traverse = node => {
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
         }
         if(value < currentNode.value) {
            currentNode = currentNode.left;
         } else {
            currentNode = currentNode.right;
         }
      }
      return false;
   }
   dfsInorder() {
      // left, middle, right
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      
      // Output = 1,5,6,10,17,19,21
      let result = [];
      let searchtree = node => {
         if(node.left) searchtree(node.left);
         result.push(node.value);
         if(node.right) searchtree(node.right);
      }
      searchtree(this.root);
      return result;
   }
   dfsPreorder() {
      // middle, left, right
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      
      // Output = 10,5,1,6,19,17,21
      let result = [];
      let searchtree = node => {
         result.push(node.value);
         if(node.left) searchtree(node.left);
         if(node.right) searchtree(node.right);
      }
      searchtree(this.root);
      return result;
   }
   dfsPostorder() {
      // left, right, middle
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      // Output = 1,6,5,17,21,19,10
      let result = [];
      let searchtree = node => {
         if(node.left) searchtree(node.left);
         if(node.right) searchtree(node.right);
         result.push(node.value);
      }
      searchtree(this.root);
      return result;
   }
   bfs() {
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      // Output - 10,5,19,1,6,17,21
      let result = [];
      let queue = [];
      queue.push(this.root);
      while(queue.length) {
         let currentNode = queue.shift();
         result.push(currentNode.value);
         if(currentNode.left) {
            queue.push(currentNode.left);
         } if(currentNode.right) {
            queue.push(currentNode.right);
         }
      }
      return result;
   }
}






const bst = new BinarySearchTree(10)
bst.insert(5)
bst.insert(1)
bst.insert(6)
bst.insert(19)
bst.insert(17)
bst.insert(21)

console.log("BST Size: ",bst.size());

console.log("BST Min: ",bst.min());
console.log("BST Max: ",bst.max());

console.log("Is Found 2: ",bst.lookup(2));
console.log("Is Found 6: ",bst.lookup(6));

// DFS!!!
// in-order: 1, 5, 6, 10, 17, 19, 21
console.log("Inorder:",bst.dfsInorder());

// pre-order: 10, 5, 1, 6, 19, 17, 21
console.log("Preorder:",bst.dfsPreorder());

// post-order: 1, 6, 5, 17, 21, 19, 10
console.log("Postorder:",bst.dfsPostorder());

// BFS: 10, 5, 19, 1, 6, 17, 21
console.log("BFS:",bst.bfs());

function getLeafCountOfBinaryTree(node) {
  if(node==null) return 0;
  if(node.left==null && node.right==null) return 1;
  return getLeafCountOfBinaryTree(node.left)+getLeafCountOfBinaryTree(node.right);
}

console.log("COUNT LEAF NODE: ", getLeafCountOfBinaryTree(bst.root));

function hightOfBinaryTree(node) {
   if(node == null) {
      return 0;
   } else {
      let lTree = hightOfBinaryTree(node.left);
      let rTree = hightOfBinaryTree(node.right);
      if(lTree > rTree) {
         return lTree + 1;
      } else {
         return rTree + 1;
      }
   }
}

console.log("HIGHT OF BINARY TREE: ", hightOfBinaryTree(bst.root));
