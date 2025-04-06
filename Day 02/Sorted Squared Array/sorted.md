

# 🔲 Squares of a Sorted Array

> LeetCode Link: [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

---

## 🧠 Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, return an array of **the squares of each number**, also sorted in **non-decreasing order**.

### Example:
```
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
```

---

## 🧠 Intuition

- Squaring a sorted array might break the order because **negative numbers become positive**.
- So we need to square all values and **sort** them again.
- But we can also solve this more **efficiently** using **Two Pointer Technique**.

---

## 💣 Brute Force Approach

### 🪜 Steps:
1. Create a new array with squared elements using `.map()`.
2. Sort the array.

### ⏱️ Time & Space Complexity
- **Time:** `O(n log n)` (due to sorting)
- **Space:** `O(n)`

### 💻 Code:
```javascript
var sortedSquares = function(nums){
    let squaredArr = nums.map((num) => num * num);
    squaredArr.sort((a, b) => a - b);
    return squaredArr;
}
```

---

## ⚡ Optimized Approach – Two Pointer Technique

### 🪜 Steps:
1. Create a result array of same length.
2. Use two pointers: `left` at start and `right` at end.
3. Compare squares of `left` and `right`.
4. Fill the result array from end to start.
5. Move the pointer that had the larger square.

### ⏱️ Time & Space Complexity
- **Time:** `O(n)`
- **Space:** `O(n)` (due to result array)

### 💻 Code:
```javascript
var sortedSquares = function(nums){
    let n = nums.length;
    let result = new Array(n);
    let left = 0, right = n - 1, index = n - 1;

    while(left <= right){
        let leftResult = nums[left] * nums[left];
        let rightResult = nums[right] * nums[right];

        if(leftResult > rightResult){
            result[index] = leftResult;
            left++;
        } else {
            result[index] = rightResult;
            right--;
        }

        index--;
    }

    return result;
}
```

---

## ✨ Summary

| Approach      | Time Complexity | Space Complexity | Notes                    |
|---------------|------------------|------------------|---------------------------|
| Brute Force   | O(n log n)       | O(n)             | Simple but not optimal    |
| Two Pointers  | O(n)             | O(n)             | Optimal and elegant 💯    |

---
