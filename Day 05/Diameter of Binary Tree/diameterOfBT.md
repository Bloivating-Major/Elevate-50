
---

# 🌳 Diameter of Binary Tree

> LeetCode Link: [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

---

## 🧠 Problem Statement

The **diameter** of a binary tree is the **length of the longest path** between any two nodes. This path **may or may not pass through the root**.

---

### 📌 Example:

```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: The path is [4 → 2 → 1 → 3] or [5 → 2 → 1 → 3]
```

---

## 💡 Intuition

To find the diameter:
- We need the **height of left** and **height of right** subtree for every node.
- The **longest path** will be `leftHeight + rightHeight`.
- Track the max path length using a global variable.

---

## 🔄 Approach

### 🪜 Steps:

1. Use a helper function `solve(node)` to compute the height recursively.
2. At each node:
   - Compute left and right subtree heights.
   - Update the diameter: `max(diameter, left + right)`
3. Return the height: `1 + max(left, right)`.
4. Return the final diameter stored in `ans`.

---

### 💻 Code:

```javascript
var diameterOfBinaryTree = function (root) {
    let ans = 0;

    var solve = function (node) {
        if (node === null) return 0;

        let leftHeight = solve(node.left);
        let rightHeight = solve(node.right);

        // Update the diameter at this node
        ans = Math.max(ans, leftHeight + rightHeight);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    solve(root);
    return ans;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                              |
|------------|------------------------------------------|
| ⏰ Time     | O(n) – Every node is visited once         |
| 🧠 Space    | O(h) – Where `h` is the height of the tree (recursion stack) |

---

## ✅ Summary

- A classic DFS problem.
- Focuses on reusing the height function to track the diameter.
- The key idea is: **diameter doesn't mean passing through root**, it can be **any path** in the tree.

---
