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

// Time Complexitity of DFS and BFS - O(N) - https://stackoverflow.com/questions/4547012/complexities-of-binary-tree-traversals

//        10
//      /    \
//     5      19
//    /  \   /  \
//   1    6 17  21

const leafNode = [];

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
      let newNode = new Node(value);
      let searchTree = (node) => {
         if(value < node.value) {
            if(!node.left) {
               node.left = newNode;
            } else {
               searchTree(node.left);
            }
         } else if(value > node.value) {
            if(!node.right) {
               node.right = newNode;
            } else {
               searchTree(node.right);
            }
         }
      }
      searchTree(this.root);
   }

   remove(value) {
      let isRemoved = false;
      let searchTree = (node, value) => {
         if(!node) return null;

         if(value < node.value) {
            node.left = searchTree(node.left, value);
            return node;
         } else if(value > node.value) {
            node.right = searchTree(node.right, value);
            return node;
         }

         isRemoved = true;

         if(!node) return null;
         if(!node.left && !node.right) return null;
         
         if(!node.left) return node.right;
         if(!node.right) return node.left;

         const succVal = this.minNode(node.right, value);
         node.value = succVal;
         node.right = searchTree(node.right, succVal);
         return node;
      }
   }

   minNode(node) {
      while(node.left) {
         node = node.left;
      }
      return node.value;
   }

   min() {
      let curr = this.root;
      while(curr.left) {
         curr = curr.left;
      }
      return curr.value;
   } 

   max() {
      let curr = this.root;
      while(curr.right) {
         curr = curr.right;
      }
      return curr.value;
   }

   lookup(value) {
      let curr = this.root;
      while(curr) {
         if(value == curr.value) {
            return true;
         } else if(value < curr.value) {
            curr = curr.left;
         } else {
            curr = curr.right;
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
      let searchTree = (node) => {
         if(node.left) searchTree(node.left);
         result.push(node.value);
         if(node.right) searchTree(node.right);
      }
      searchTree(this.root);
      return result;
   }  
   
   dfsPreorder() {
      // middle, left, right
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      
      // Output = 10,5,1,6,17,19,21
      let result = [];
      let searchTree = (node) => {
         result.push(node.value);
         if(node.left) searchTree(node.left);
         if(node.right) searchTree(node.right);
      }
      searchTree(this.root);
      return result;
   }

   dfsPostorder() {
      // left, right, middle
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21

      // Output = 1,6,5,10,17,21,19
      let result = [];
      let searchTree = (node) => {
         if(node.left) searchTree(node.left);
         if(node.right) searchTree(node.right);
         result.push(node.value);
      }
      searchTree(this.root);
      return result;
   }

   bfs() {
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21

      // Output - 10,5,19,1,6,17,21
      let queue = [];
      queue.push(this.root);
      let result = [];
      while(queue.length) {
         let current = queue.shift();
         result.push(current.value);

         if(current.left) {
            queue.push(current.left);
         } if(current.right) {
            queue.push(current.right);
         }
      }

      return result;
   }
}

function getLeafCountOfBinaryTree(node) {
   if(node == null) {
      return 0;  
   } else if(!node.left && !node.right) {
      leafNode.push(node.value);
      return 1;
   }

   return getLeafCountOfBinaryTree(node.left) + getLeafCountOfBinaryTree(node.right);
}

function hightOfBinaryTree(node) {
   if(!node) {
      return 0;
   } else {
      let lh = hightOfBinaryTree(node.left);
      let rh = hightOfBinaryTree(node.right);

      if(lh > rh) {
         return lh + 1;
      } else {
         return rh + 1;
      }
   }
}

function isBalanced(node) {
   if(!node) return 0;

   let lh = isBalanced(node.left);
   if(lh == -1) return -1;

   let rh = isBalanced(node.right);
   if(rh == -1) return -1;

   if(Math.abs(lh - rh) > 1) return -1;
   return Math.max(lh, rh) + 1;
}

function isFullBinaryTree(node) {
   if(!node) return true;
   if(!node.left && !node.right) return true;
   if(node.left && node.right) {
      return isFullBinaryTree(node.left) && isFullBinaryTree(node.right)
   }
   return false;
}

function countNodes(node) {
   if(!node) {
      return 0;
   } 
   return 1 + countNodes(node.left) + countNodes(node.right);
}

function isCompleteBinaryTree(node) {
   let total = countNodes(node);
   let dfs = (node, index) => {
      if(!node) return true;
      if(index >= total) return false;
      return dfs(node.left, 2 * index + 1, 2 * index + 2);
   }
   return dfs(node, 0);
} 

function isPerfectBinaryTree(node) {
   let h = hightOfBinaryTree(node);
   let n = countNodes(node);
   return n == (1 << h) - 1;
}

function lcaBST(node, p, q) {
   if(!node) return null;

   if(node.value == p || node.value == q) return node;

   const left = lcaBST(node.left, p, q);
   const right = lcaBST(node.right, p, q);

   if(left && right) return node;
   return left ?? right;
}

function diameterOfBinaryTree(node) {
   let best = 0;
   const height = (node) => {
      if(!node) return 0;
      const left = height(node.left);
      const right = height(node.right);

      best = Math.max(best, left + right);
      return Math.max(left, right) + 1;
   }

   height(node);
   return best;
}


// const bst = new BinarySearchTree(10)
// bst.insert(5)
// bst.insert(3)
// bst.insert(6)
// bst.insert(2)
// bst.insert(4)
// bst.insert(6)
// bst.insert(19)
// bst.insert(17)
// bst.insert(21)
// bst.insert(16)
// bst.insert(20)
// bst.insert(23)
// bst.insert(7)
// bst.insert(18)


// const bst = new BinarySearchTree('G')
// bst.insert('H')
// bst.insert('I')
// bst.insert('B')
// bst.insert('P')
// bst.insert('N')
// bst.insert('O')
// bst.insert('S')
// bst.insert('K')

const bst = new BinarySearchTree(10)
bst.insert(5)
bst.insert(19)
bst.insert(1)
bst.insert(6)
bst.insert(17)
bst.insert(21)

console.log(JSON.stringify(bst))

console.log("BST Min: ",bst.min());
console.log("BST Max: ",bst.max());

console.log("Is Found 2: ",bst.lookup(2));
console.log("Is Found 61: ",bst.lookup(61));
console.log("Is Found 10: ",bst.lookup(10));
console.log("Is Found 17: ",bst.lookup(17));

// DFS!!!
// in-order: 1, 5, 6, 10, 17, 19, 21
console.log("Inorder:",bst.dfsInorder());

// pre-order: 10, 5, 1, 6, 19, 17, 21
console.log("Preorder:",bst.dfsPreorder());

// post-order: 1, 6, 5, 17, 21, 19, 10
console.log("Postorder:",bst.dfsPostorder());

// BFS: 10, 5, 19, 1, 6, 17, 21
console.log("BFS:",bst.bfs());


// console.log("Remove 7:", bst.remove(7)); // false
// console.log("Remove 21:", bst.remove(21)); // true

console.log("BFS After remove:",bst.bfs());

console.log("Postorder After remove:",bst.dfsPostorder());

console.log("COUNT LEAF NODE: ", getLeafCountOfBinaryTree(bst.root));
console.log("HIGHT OF BINARY TREE: ", hightOfBinaryTree(bst.root));
console.log("Leaf Nodes Are: ", leafNode);

console.log("Is Balance Tree ( AVL-balanced ) :", isBalanced(bst.root) != -1)

console.log("Is Full Binary Tree:", isFullBinaryTree(bst.root));
console.log("Is Complete Binary Tree:", isCompleteBinaryTree(bst.root));
console.log("Is Perfect Binary Tree:", isPerfectBinaryTree(bst.root));


console.log("LCA of BST:", lcaBST(bst.root, 6, 17));

console.log("LCA of BST:", lcaBST(bst.root, 6, 17)?.value);

console.log("Daimeter of Binary Tree:", diameterOfBinaryTree(bst.root));
