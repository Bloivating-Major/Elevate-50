

# 👀 Binary Tree Right Side View

> LeetCode Link: [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

---

## 🧠 Problem Statement

Given the `root` of a binary tree, return the **values of the nodes you can see** ordered from **top to bottom** when looking at the tree from the **right side**.

---

### 📌 Example:

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

---

## 💡 Intuition

When viewing a binary tree from the **right**, we only see the **last node of each level** (from left to right traversal).

So, a **level order traversal (BFS)** where we pick the **last node in each level** is perfect!

---

## 🔄 Approach

### 🪜 Steps:

1. Use a **queue** for level-order traversal (BFS).
2. For each level:
   - Traverse all nodes at that level.
   - **Track the last node** (rightmost) of that level.
3. Add the value of the last node to the result.

---

### 💻 Code:

```javascript
var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // If it's the last node in this level, add to result
            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                    |
|------------|--------------------------------|
| ⏰ Time     | O(n) – Each node is visited once |
| 🧠 Space    | O(n) – For the queue used in BFS |

---

## ✅ Summary

- Classic **level-order traversal** with a twist: just grab the **last node** at each level.
- Easy to implement using a queue.

---
