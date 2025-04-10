

# 🌲 Level Order Traversal

> LeetCode Link: [Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

---

## 🧠 Problem Statement

Given the root of a binary tree, return the **level order traversal** of its nodes' values.  
(i.e., from left to right, level by level).

---

### 📌 Example:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

---

## 💡 Intuition

Use **Breadth-First Search (BFS)** with a queue to process the tree **level by level**.

---

## 🔄 Approach

### 🪜 Steps:

1. Return an empty array if the root is `null`.
2. Initialize a `queue` with the root node.
3. While the queue is not empty:
   - Store the number of nodes in the current level (`size = queue.length`)
   - For each node in this level:
     - Dequeue it.
     - Push its value to a `cur` array.
     - Enqueue its `left` and `right` children if they exist.
   - Push `cur` to the final answer.
4. Return the answer.

---

### 💻 Code:
```javascript
var levelOrder = function(root) {
    let ans = [];

    if(root === null) return ans;

    let queue = [root];

    while(queue.length !== 0){
        let cur = [];
        let size = queue.length;

        for(let i = 1; i <= size; i++){
            let node = queue.shift();
            cur.push(node.val);

            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }

        ans.push(cur);
    }

    return ans;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                          |
|------------|--------------------------------------|
| ⏰ Time     | O(n) – Every node is visited once    |
| 🧠 Space    | O(n) – Queue + output storage        |

---

## ✅ Summary

- This is a classic BFS traversal question.
- Great for understanding **queue-based traversal in trees**.

---
