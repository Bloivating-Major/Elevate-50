
---

# 🌳 Path Sum III

> LeetCode Link: [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree and an integer `targetSum`, return the total number of **paths** that sum up to the target value.

- A path does **not** need to start or end at the root or a leaf.
- But it must go **downwards** (from parent to child only).

---

### 📌 Example:

```
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3

Explanation: The paths that sum to 8 are:
- 5 → 3
- 5 → 2 → 1
- -3 → 11
```

---

## 💡 Intuition

We must **count all downward paths** (starting from any node) that sum up to `targetSum`.

To do that:
- For each node, assume it's the **starting point**.
- Then recursively explore all downward paths that sum to the target from that node.

---

## 🔄 Approach

### 🪜 Steps:

1. Create a helper function `countPaths(node, target)` that:
   - Returns the count of paths starting at `node` that sum to `target`.

2. For the current `root`, get:
   - Paths starting at `root` (`countPaths`)
   - Paths in the **left subtree**
   - Paths in the **right subtree**

3. Add all these and return the total.

---

### 💻 Code:

```javascript
var countPaths = function(node, targetSum) {
    if (node === null) return 0;

    let count = 0;
    if (node.val === targetSum) count++;

    count += countPaths(node.left, targetSum - node.val);
    count += countPaths(node.right, targetSum - node.val);

    return count;
}

var pathSum = function(root, targetSum) {
    if (root === null) return 0;

    return (
        countPaths(root, targetSum) +
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum)
    );
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                              |
|------------|------------------------------------------|
| ⏰ Time     | O(n²) – In the worst case, for each node, we search all its paths |
| 🧠 Space    | O(h) – Due to recursion stack (h = height of tree) |

---

## ✅ Summary

- Brute-force recursive approach that checks **every possible path**.
- Can be **optimized** using a **prefix sum + hashmap** approach to achieve O(n) time.

---
