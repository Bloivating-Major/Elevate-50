

# 🌳 Postorder Traversal of Binary Tree

> LeetCode Link: [Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, return the **postorder traversal** of its nodes' values.

### Postorder Traversal Rule:
🔁 **Left → Right → Root**

---

### 🧪 Example:

```
Input: root = [1,null,2,3]
Output: [3,2,1]

Tree:
    1
     \
      2
     /
    3
```

---

## 💡 Intuition

- In postorder traversal, we visit:
  1. **Left** subtree
  2. **Right** subtree
  3. **Root** node

---

## 🔁 Recursive Approach

### 🪜 Steps:
1. Define a helper function `solve(root, ans)`:
   - If `root` is null, return.
   - Recursively call `solve` on the **left** subtree.
   - Recursively call `solve` on the **right** subtree.
   - Push the **current node’s value** to the result array.
2. Initialize an empty array `ans` in the main function.
3. Call `solve(root, ans)` and return the result.

---

### 💻 Code:
```javascript
var solve = function(root, ans){
    if(!root) return;
    solve(root.left, ans);    // Left
    solve(root.right, ans);   // Right
    ans.push(root.val);       // Root
}

var postorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                        |
|------------|------------------------------------|
| ⏰ Time     | O(n) – Visit each node once        |
| 🧠 Space    | O(n) – Recursion stack + result array |

---

## ✅ Summary

- **Postorder traversal** is useful when deleting or evaluating tree structures.
- This recursive version is simple to implement.
- Can also be solved using an **iterative** method with two stacks.

---
