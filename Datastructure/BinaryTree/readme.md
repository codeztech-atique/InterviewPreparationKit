For Visualization

https://visualgo.net/bn/bst



# 🌳 Types of Binary Trees

Binary trees can be classified into **structural types** and **specialized types** used in data structures.

---

## 1. Structural Types

### 🔹 Full Binary Tree
- Every node has either **0 or 2 children**.
- No node has only one child.

✅ Example:
```
     10
    /  \
   5    20
```

---

### 🔹 Complete Binary Tree
- All levels completely filled except possibly the last.
- Last level nodes are filled **left to right**.

✅ Example:
```
     10
    /  \
   5    20
  / \
 3   7
```

---

### 🔹 Perfect Binary Tree
- A special case of **Full + Complete**.
- All internal nodes have 2 children, and all leaves are at the same level.

✅ Example:
```
      10
     /  \
    5    20
   / \  / \
  3  7 15 25
```

---

### 🔹 Balanced Binary Tree
- Height difference between left and right subtree at every node ≤ 1.
- Prevents skewness.

✅ Example:
```
     10
    /  \
   5    20
  / \
 3   7
```

---

### 🔹 Degenerate (Skewed) Binary Tree
- Every parent node has only one child.
- Looks like a **linked list**.

✅ Example:
```
10
  \
   20
     \
      30
```

---

### 🔹 Extended (Strict / Proper) Binary Tree
- Same as **Full Binary Tree** → every node has **0 or 2 children**.

---

## 2. Specialized Binary Trees (Used in Data Structures)

### 🔹 Binary Search Tree (BST)
- Left child < Parent < Right child.

### 🔹 AVL Tree
- Self-balancing BST.
- Balance factor of each node = -1, 0, or 1.

### 🔹 Red-Black Tree
- Self-balancing BST with color properties.
- Used in `Map`, `Set` implementations.

### 🔹 Splay Tree
- Recently accessed elements are moved near the root.

### 🔹 Treap
- Combination of **BST + Heap** properties.

### 🔹 Heap (Min-Heap / Max-Heap)
- A **Complete Binary Tree** with heap property.
- Root is min (min-heap) or max (max-heap).

### 🔹 Segment Tree
- Used for range queries and updates.

### 🔹 Fenwick Tree (Binary Indexed Tree)
- Efficient for prefix sums and cumulative frequency tables.

---

# ✅ Summary

### **Structural Types**
- Full  
- Complete  
- Perfect  
- Balanced  
- Degenerate (Skewed)  
- Extended (Strict / Proper)  

### **Specialized Types**
- BST  
- AVL  
- Red-Black  
- Splay  
- Treap  
- Heap  
- Segment Tree  
- Fenwick Tree  

---
