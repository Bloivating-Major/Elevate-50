

# 🌲 Invert Binary Tree

> LeetCode Link: [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, invert the tree, and return its root.

Inverting a tree means swapping the left and right children **recursively** for every node.

---

### 📌 Example:

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

---

## 💡 Intuition

Think of this as a **mirror image** of the binary tree. We can use **postorder traversal** (left → right → swap) to invert subtrees from bottom to top.

---

## 🔄 Approach

### 🪜 Steps:

1. Use a recursive helper function `solve`.
2. For every node:
   - Recursively invert the left subtree.
   - Recursively invert the right subtree.
   - Swap the left and right children.
3. Return the root.

---

### 💻 Code:

```javascript
var solve = function(root) {
    if (root === null) return;

    // Invert left and right subtrees
    solve(root.left);
    solve(root.right);

    // Swap left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
};

var invertTree = function(root) {
    if (root === null) return null;
    solve(root);
    return root;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                       |
|------------|-----------------------------------|
| ⏰ Time     | O(n) – Visit every node once      |
| 🧠 Space    | O(h) – Height of tree (recursion stack) |

---

## ✅ Summary

- A clean recursive solution using **postorder traversal**.
- This is a classic recursive tree problem that improves understanding of tree manipulations.
- Can also be solved using **BFS** or **DFS iterative** approaches.

---
