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
      this.count++;
      let newNode = new Node(value);
      const traverse = node => {
         if(value < node.value) {
            if(!node.left) {
               node.left = newNode;
            } else {
               traverse(node.left);
            }
         } 
         else if(value > node.value) {
            if(!node.right) {
               node.right = newNode;
            } else {
               traverse(node.right);
            }
         }
      }
      traverse(this.root);
   }

   // Public: remove a value; returns true if removed, false if not found
   remove(value) {
      let removed = false;

      const removeRec = (node, v) => {
         if (!node) return null;

         if (v < node.value) {
         node.left = removeRec(node.left, v);
         return node;
         } else if (v > node.value) {
         node.right = removeRec(node.right, v);
         return node;
         }

         // Found the node
         removed = true;

         // Case 1: leaf
         if (!node.left && !node.right) return null;

         // Case 2: one child
         if (!node.left) return node.right;
         if (!node.right) return node.left;

         // Case 3: two children -> copy inorder successor VALUE, then delete that VALUE on right
         const succVal = this.min(node.right); // value, not node
         node.value = succVal;
         node.right = removeRec(node.right, succVal);
         return node;
      };

      this.root = removeRec(this.root, value);
      if (removed) this.count--;        // keep your size accurate
      return removed;
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
      return false;
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
      const searchTree = node => { // Sort array - Asc
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
      
      // Output = 2,12,3,36,28,39,15
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
      //      4
      //    /   \
      //   2     7
      //  / \   / \
      // 1   3 6   9   
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


const bst = new BinarySearchTree(4)
bst.insert(2)
bst.insert(7)
bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(9)


function lcaBST(root, v1, v2) { // Last common acestor
  if (v1 === v2) return v1;   // if both parameters are the same
  let low = Math.min(v1, v2), high = Math.max(v1, v2);
  let cur = root;
  while (cur) {
    if (high < cur.value) cur = cur.left;
    else if (low > cur.value) cur = cur.right;
    else return cur.value;
  }
  return null;
}

function getLeafCountOfBinaryTree(node) {
    if(node === null) return 0;
    if(node.left == null && node.right == null) {
      leafNode.push(node.value);
      return 1;
    } 
    return getLeafCountOfBinaryTree(node.left) + getLeafCountOfBinaryTree(node.right);
}


function hightOfBinaryTree(node) {
   if(node == null) { 
      return 0;
   } else {
      let lTree = hightOfBinaryTree(node.left);
      let RTree = hightOfBinaryTree(node.right);
      if(lTree > RTree) {
         return lTree + 1;
      } else {
         return RTree + 1;
      }
   }
}

// Find node with its parent & level (BFS)
function findWithParent(root, target) {
  if (!root) return null;
  const q = [{ node: root, parent: null, level: 0 }];
  while (q.length) {
    const { node, parent, level } = q.shift();
    if (node.value === target) return { node, parent, level };
    if (node.left)  q.push({ node: node.left,  parent: node, level: level + 1 });
    if (node.right) q.push({ node: node.right, parent: node, level: level + 1 });
  }
  return null;
}

// (a) children of X (values, left→right)
function childrenOf(root, x) {
  const fp = findWithParent(root, x);
  if (!fp) return [];
  const out = [];
  if (fp.node.left)  out.push(fp.node.left.value);
  if (fp.node.right) out.push(fp.node.right.value);
  return out;
}

// (c) parent of X (value or null)
function parentOf(root, x) {
  const fp = findWithParent(root, x);
  return fp ? (fp.parent ? fp.parent.value : null) : null;
}

// (d) level of X (depth). root=0; pass {oneIndexed:true} for root=1.
function levelOf(root, x, opts = {}) {
  const fp = findWithParent(root, x);
  if (!fp) return null;
  return opts.oneIndexed ? fp.level + 1 : fp.level;
}

// (e) subtree of X (preorder list of values)
function subtreeOf(root, x) {
  const fp = findWithParent(root, x);
  if (!fp) return [];
  const out = [];
  (function pre(n) {
    if (!n) return;
    out.push(n.value);
    pre(n.left);
    pre(n.right);
  })(fp.node);
  return out;
}

// (f) ancestors of X (from parent up to root)
function ancestorsOf(root, x) {
  const path = [];

  function dfs(node) {
    if (!node) return false;
    path.push(node.value);              // add current to path
    if (node.value === x) return true;  // found target
    if (dfs(node.left) || dfs(node.right)) return true;
    path.pop();                         // backtrack
    return false;
  }

  if (!dfs(root)) return [];            // x not found

  // path is [root ... x]. Remove x and reverse to get [parent ... root]
  path.pop();
  return path.reverse();
}

function isBalanced(node) {
   if (!node) return 0; // height of null = 0

   let lh = isBalanced(node.left);
   if (lh === -1) return -1; // left subtree not balanced

   let rh = isBalanced(node.right);
   if (rh === -1) return -1; // right subtree not balanced

   if (Math.abs(lh - rh) > 1) return -1; // this node unbalanced

   return Math.max(lh, rh) + 1; // return height
}

function diameterOfBinaryTree(root) {
  let best = 0;
  function height(n) {
    if (!n) return 0;
    const lh = height(n.left);
    const rh = height(n.right);
    best = Math.max(best, lh + rh + 1); // '+1' counts current node
    return Math.max(lh, rh) + 1;
  }
  height(root);
  return best;
}


// Full binary tree checks: every node has 0 or 2 children 
function isFullBinaryTree(node) {
  if (!node) return true;
  if (!node.left && !node.right) return true; // leaf
  if (node.left && node.right) {
    return isFullBinaryTree(node.left) && isFullBinaryTree(node.right);
  }
  return false; // exactly one child
}

// A tree is complete if level order has no 'null' before a non-null later.
function isCompleteBinaryTree(root) {
  if (!root) return true;
  const q = [root];
  let seenNull = false;
  while (q.length) {
    const n = q.shift();
    if (!n) {
      seenNull = true;
      continue;
    }
    if (seenNull) return false; // found a node after a gap
    q.push(n.left);
    q.push(n.right);
  }
  return true;
}

console.log("BST Size: ",bst.size());

console.log("BST Min: ",bst.min());
console.log("BST Max: ",bst.max());

console.log("Is Found 2: ",bst.lookup(2));
console.log("Is Found 92: ",bst.lookup(92));

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

console.log("Remove 7:", bst.remove(7));             // true

console.log("BFS After remove:",bst.bfs());

console.log("Postorder After remove:",bst.dfsPostorder());

console.log("COUNT LEAF NODE: ", getLeafCountOfBinaryTree(bst.root));
console.log("Leaf Nodes Are: ", leafNode);
console.log("LCA of BST:", lcaBST(bst.root, 1, 6))

console.log("HIGHT OF BINARY TREE: ", hightOfBinaryTree(bst.root));
console.log("Is Balance Tree:", isBalanced(bst.root) != -1)
console.log("Is Full Binary Tree:", isFullBinaryTree(bst.root));
console.log("Is Complete Binary Tree:", isCompleteBinaryTree(bst.root));
console.log("Children of 2:", childrenOf(bst.root, 2));                 // [4, 5]
console.log("Parent of 3:", parentOf(bst.root, 3));                     // 1
console.log("Level of 5 (root=0):", levelOf(bst.root, 2));              // 2
console.log("Level of 5 (root=1):", levelOf(bst.root, 2, {oneIndexed:true})); // 3
console.log("Subtree of 2:", subtreeOf(bst.root, 2));                   // [2,4,7,5,8]
console.log("Subtree of 6:", subtreeOf(bst.root, 6));                   // [6,9]
console.log("Ancestors of 1:", ancestorsOf(bst.root, 1));               // [2,1]
console.log("Daimeter of Binary Tree:", diameterOfBinaryTree(bst.root));
 
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
