
# 🌳 Inorder Traversal of Binary Tree

> LeetCode Link: [Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, return the **inorder traversal** of its nodes' values.

### Inorder Traversal Rule:
🔁 **Left → Root → Right**

---

### 🧪 Example:

```
Input: root = [1,null,2,3]
Output: [1,3,2]

Tree:
    1
     \
      2
     /
    3
```

---

## 💡 Intuition

- Inorder traversal visits nodes in the order:
  - First traverse the left subtree
  - Then visit the root node
  - Then traverse the right subtree

---

## 🔁 Recursive Approach

### 🪜 Steps:
1. Create a helper function `solve()` that:
   - If the node is `null`, return.
   - Recursively call `solve` on the left child.
   - Push the current node’s value to `ans`.
   - Recursively call `solve` on the right child.
2. In the main function, initialize an empty array `ans`.
3. Call `solve(root, ans)` and return `ans`.

---

### 💻 Code:
```javascript
var solve = function(root, ans){
    if(root === null) return;
    solve(root.left, ans);     // Left
    ans.push(root.val);        // Root
    solve(root.right, ans);    // Right
}

var inorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                    |
|------------|--------------------------------|
| ⏰ Time     | O(n) – Each node is visited once |
| 🧠 Space    | O(n) – Due to recursion stack and result array |

---

## ✅ Summary

- **Inorder traversal** is a fundamental tree traversal technique.
- This recursive method is simple and intuitive.
- We can later optimize this using **iterative** method or **Morris Traversal** for `O(1)` space.

---
