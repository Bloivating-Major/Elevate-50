Here’s your 📘 README for the **Same Tree** problem:

---

# 🌲 Same Tree

> LeetCode Link: [Same Tree](https://leetcode.com/problems/same-tree/)

---

## 🧠 Problem Statement

Given the roots of two binary trees `p` and `q`, write a function to check if they are **the same or not**.

> Two binary trees are considered the same if they are **structurally identical** and the nodes have the **same value**.

---

### 🧪 Example:

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false
```

---

## 💡 Intuition

We recursively compare:
- If both nodes are `null` → they are equal ✅
- If one is `null` and the other isn’t → not equal ❌
- If values are not equal → not equal ❌
- Otherwise → recursively compare left and right subtrees.

---

## 🔁 Recursive DFS Approach

### 🪜 Steps:
1. Base case:
   - Both `p` and `q` are `null` → return `true`.
   - One is `null` → return `false`.
2. If `p.val !== q.val`, return `false`.
3. Recursively check:
   - `isSameTree(p.left, q.left)`
   - `isSameTree(p.right, q.right)`
4. Return `true` only if **both** subtrees match.

---

### 💻 Code:
```javascript
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;

    if((p === null && q !== null) || (p !== null && q === null)) return false;

    if(p.val === q.val){
        let left = isSameTree(p.left, q.left);
        let right = isSameTree(p.right, q.right);
        return left && right;
    }

    return false;
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                    |
|------------|--------------------------------|
| ⏰ Time     | O(n) – Visit every node once   |
| 🧠 Space    | O(h) – Call stack, h = height  |

---

## ✅ Summary

- It’s a **recursive DFS** that matches node values and structure.
- A good base problem for comparing trees.

---

Want a **BFS (iterative)** version too? I can include that as well! 🚀