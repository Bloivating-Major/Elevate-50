

# 🌳 Maximum Depth of Binary Tree

> LeetCode Link: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, return **its maximum depth**.

> **Depth** of a binary tree is the number of nodes along the **longest path** from the root node down to the farthest leaf node.

---

### 🧪 Example:

```
Input: root = [3,9,20,null,null,15,7]
Output: 3

Tree:
      3
     / \
    9  20
       / \
      15  7
```

---

## 💡 Intuition

- A node’s depth = **1 + max depth of its left and right subtree**.
- For a `null` node (leaf’s child), the depth is `0`.

---

## 🔁 Recursive DFS Approach

### 🪜 Steps:
1. If `root` is `null`, return 0.
2. Recursively compute:
   - Depth of left subtree: `maxDepth(root.left)`
   - Depth of right subtree: `maxDepth(root.right)`
3. Return `1 + max(leftDepth, rightDepth)`.

---

### 💻 Code:
```javascript
var maxDepth = function(root) {
    if (root === null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                        |
|------------|------------------------------------|
| ⏰ Time     | O(n) – Visit each node once        |
| 🧠 Space    | O(h) – Recursion stack (h = tree height) |

---

## ✅ Summary

- We use **depth-first recursion** to explore all paths and return the max depth.
- Perfect example of **divide and conquer** in binary trees.

---

Let me know if you want the **BFS (level-order)** version too! 🌊