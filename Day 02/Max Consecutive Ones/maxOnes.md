
# 🔢 Max Consecutive Ones

> LeetCode Link: [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)

## 🧠 Problem Statement
Given a binary array `nums`, return the maximum number of consecutive `1`s in the array.

### Example:
```
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two 1's and the last three 1's form sequences. The maximum is 3.
```

---

## 🧠 Intuition
We're trying to find the **maximum streak of 1s**.  
We scan the array and **keep track of current streaks**, and **reset** the count whenever we see a `0`.

---

## 💡 Approach

### ✅ Optimal Approach (Kadane's-like)
- Use a variable `count` to store current consecutive `1`s.
- Use another variable `maxOnes` to keep track of the **maximum streak** seen so far.
- Iterate through the array:
  - If element is `1`, increment `count`, and update `maxOnes`.
  - If element is `0`, reset `count`.

### 🧮 Time & Space Complexity
- **Time:** `O(n)`  
- **Space:** `O(1)`

---

## ✅ Code (JavaScript)
```javascript
// Kadane's Algorithm
var findMaxConsecutiveOnes = function (nums){
    let maxOnes = 0, count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
            maxOnes = Math.max(maxOnes, count);
        } else {
            count = 0;
        }
    }

    return maxOnes;
};
```

---

## ✨ Summary
- 🔥 Used a linear scan and counter method
- 🧠 Efficient and clean solution using Kadane’s-like pattern
- 💪 Time & space efficient: `O(n)` and `O(1)`

