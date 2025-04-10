
# 🌲 Preorder Traversal of Binary Tree

> LeetCode Link: [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, return the **preorder traversal** of its nodes' values.

### Preorder Traversal Rule:
🔁 **Root → Left → Right**

---

### 🧪 Example:

```
Input: root = [1,null,2,3]
Output: [1,2,3]

Tree:
    1
     \
      2
     /
    3
```

---

## 💡 Intuition

- In preorder traversal, we visit:
  1. **Root** node
  2. **Left** subtree
  3. **Right** subtree

---

## 🔁 Recursive Approach

### 🪜 Steps:
1. Create a helper function `solve(root, ans)`:
   - If `root` is null, return.
   - Push the **current node’s value** into the result.
   - Recursively call `solve` on the **left** subtree.
   - Recursively call `solve` on the **right** subtree.
2. In the main function, initialize an empty array `ans`.
3. Call `solve(root, ans)` and return `ans`.

---

### 💻 Code:
```javascript
var solve = function(root, ans){
    if(root === null) return;
    ans.push(root.val);       // Root
    solve(root.left, ans);    // Left
    solve(root.right, ans);   // Right
}

var preorderTraversal = function(root) {
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

- Preorder traversal is useful for:
  - Copying a tree
  - Generating prefix expressions from expression trees
- This approach uses **recursion**, but can also be done **iteratively** with a stack.

---