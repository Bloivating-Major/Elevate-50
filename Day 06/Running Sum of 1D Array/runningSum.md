# 🔢 Running Sum of 1D Array

## Problem Statement
Given an array `nums`, return the running sum of `nums`. The running sum is calculated by taking the sum of all elements up to each index.

### Examples:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
```

## Approaches

### 1. Simple Iteration
- Iterate through array and keep adding previous sum to current element
- Time Complexity: O(n)
- Space Complexity: O(1) (not counting output array)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [1,2,3,4]     // Output: [1,3,6,10]
test2 = [1,1,1,1,1]   // Output: [1,2,3,4,5]
test3 = [3,1,2,10,1]  // Output: [3,4,6,16,17]
```