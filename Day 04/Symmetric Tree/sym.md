
---

# 🔁 Symmetric Tree

> LeetCode Link: [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

---

## 🧠 Problem Statement

Given the root of a binary tree, **check whether it is a mirror of itself** (i.e., symmetric around its center).

---

### 📌 Example:

```
Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
```

---

## 💡 Intuition

A tree is symmetric if the **left subtree is a mirror reflection of the right subtree**.

To verify that, recursively:
- Compare the outer nodes (`left.left` vs `right.right`)
- Compare the inner nodes (`left.right` vs `right.left`)

---

## 🔁 Recursive Mirror Approach

### 🪜 Steps:

1. If the root is `null`, the tree is symmetric ✅
2. Call a helper `solve(p, q)`:
   - If both are `null` → return `true`
   - If one is `null` → return `false`
   - If `p.val !== q.val` → return `false`
3. Recursively check:
   - `solve(p.left, q.right)`
   - `solve(p.right, q.left)`
4. Return `true` only if both recursive calls return `true`.

---

### 💻 Code:
```javascript
var solve = function(p, q){
    if(p === null && q === null) return true;
    if((p === null && q !== null) || (p !== null && q === null)) return false;
    
    if(p.val === q.val){
        let left = solve(p.left, q.right);
        let right = solve(p.right, q.left);
        return left && right;
    }

    return false;
}

var isSymmetric = function(root) {
    if(root === null) return true;
    return solve(root.left, root.right);
};
```

---

## ⏱️ Time and Space Complexity

| Complexity | Description                          |
|------------|--------------------------------------|
| ⏰ Time     | O(n) – Each node visited once        |
| 🧠 Space    | O(h) – Recursive stack (height `h`)  |

---

## ✅ Summary

- This problem is a twist on comparing two trees — you just **flip one side**.
- Helps you strengthen your understanding of **recursive tree traversal**.

---
