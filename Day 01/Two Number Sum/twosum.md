# 🧮 Two Sum

**📌 Question Link:** [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/)

---
## 📝 Problem Statement
Given an array of integers `nums` and an integer `target`, return **the indices of the two numbers** such that they add up to `target`.

### 🔹 Constraints:
- Each input has **exactly one solution**.
- You may not use the same element twice.
- Return the **indices** in any order.

---
## 🔍 Approaches

### 1️⃣ Brute Force (Nested Loops) - **O(n²)** ❌
💡 **Intuition:** Try all possible pairs and check if their sum equals `target`.
```js
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
    return []; // Return empty if no solution found
};
```
✅ **Pros:** Simple to implement
❌ **Cons:** Time complexity is **O(n²)** (very slow for large inputs)

---
### 2️⃣ Better Approach (Hash Map) - **O(n)** ✅
💡 **Intuition:** Store numbers in a **hash map** to check for complements in `O(1)` time.

```js
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]; // Return indices
        }
        map.set(nums[i], i); // Store current number and index
    }
    return [];
};
```
✅ **Pros:** Fastest approach (**O(n)** time complexity)
❌ **Cons:** Uses **extra space** for the hash map

---
### 3️⃣ Optimal Approach (Two Pointers) - **O(n log n)** 🚀
💡 **Intuition:** Sort the array and use **two pointers** to find the sum.

```js
var twoSum = function(nums, target) {
    let indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a, b) => a[0] - b[0]); // Sort based on values

    let left = 0, right = indexedNums.length - 1;
    while (left < right) {
        let currentSum = indexedNums[left][0] + indexedNums[right][0];
        if (currentSum === target) {
            return [indexedNums[left][1], indexedNums[right][1]]; // Return original indices
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};
```
✅ **Pros:** **O(n log n)** time complexity (faster than brute force)
❌ **Cons:** Sorting changes the original indices, which might not be allowed

---
## ✅ Best Approach?
| Approach  | Time Complexity | Space Complexity | Pros | Cons |
|-----------|---------------|----------------|------|------|
| **Brute Force** | O(n²) | O(1) | Simple to implement | Slow for large inputs |
| **Hash Map** | O(n) | O(n) | Fastest solution | Uses extra space |
| **Two Pointers** | O(n log n) | O(1) | Efficient if index order doesn't matter | Requires sorting |

💡 **Final Verdict:** The **hash map approach** is the best for most cases! 🏆

---
🚀 **Happy Coding!** 🖥️✨

