

# 🌳 Path Sum

> LeetCode Link: [112. Path Sum](https://leetcode.com/problems/path-sum/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

---

### 📌 Example:

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22  
Output: true
```

---

## 💡 Intuition

We need to check if there's **at least one path** from the root to any leaf such that the sum of values on the path equals `targetSum`.

Use **recursion (DFS)** to explore all root-to-leaf paths.

---

## 🔄 Approach

### 🪜 Steps:

1. **Base case:** If `root` is `null`, return `false`.
2. If current node is a **leaf node** and its value equals `targetSum`, return `true`.
3. Otherwise, recursively check:
   - Left subtree with `targetSum - root.val`
   - Right subtree with `targetSum - root.val`
4. Return `true` if **either** subtree returns `true`.

---

### 💻 Code:

```javascript
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    // If it's a leaf and matches the remaining sum
    if (root.left === null && root.right === null && root.val === targetSum) {
        return true;
    }

    // Recursively check left and right subtrees
    return hasPathSum(root.left, targetSum - root.val) || 
           hasPathSum(root.right, targetSum - root.val);
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                        |
|------------|------------------------------------|
| ⏰ Time     | O(n) – Visit each node once        |
| 🧠 Space    | O(h) – Height of the tree (stack)  |

---

## ✅ Summary

- Great example of **recursive DFS traversal**.
- Checks path sum on-the-go without using extra array storage.
- Covers edge cases: null root and single-node trees.

---
