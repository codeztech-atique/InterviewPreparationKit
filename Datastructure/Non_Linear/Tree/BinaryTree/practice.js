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


class BinarySearchTree {   
  

   dfsInorder() {
      // left, middle, right
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21

      // Output = 
   }  
   
   dfsPreorder() {
      // middle, left, right
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21
      
      // Output = 
   }

   dfsPostorder() {
      // left, right, middle
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21

      // Output = 
   }

   bfs() {
      //        10
      //      /    \
      //     5      19
      //    /  \   /  \
      //   1    6 17  21

      // Output - 
   }
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


console.log("Remove 7:", bst.remove(7)); // false
console.log("Remove 21:", bst.remove(21)); // true

console.log("BFS After remove:",bst.bfs());

console.log("Postorder After remove:",bst.dfsPostorder());

console.log("COUNT LEAF NODE: ", getLeafCountOfBinaryTree(bst.root));
console.log("HIGHT OF BINARY TREE: ", heightOfBinaryTree(bst.root));
console.log("Leaf Nodes Are: ", leafNode);

console.log("Is Balance Tree ( AVL-balanced ) :", isBalanced(bst.root) != -1)

console.log("Is Full Binary Tree:", isFullBinaryTree(bst.root));
console.log("Is Complete Binary Tree:", isCompleteBinaryTree(bst.root));
console.log("Is Perfect Binary Tree:", isPerfectBinaryTree(bst.root));


console.log("LCA of BST:", lcaBST(bst.root, 6, 1));

console.log("LCA of BST:", lcaBST(bst.root, 6, 17)?.value);

console.log("Daimeter of Binary Tree:", diameterOfBinaryTree(bst.root));
