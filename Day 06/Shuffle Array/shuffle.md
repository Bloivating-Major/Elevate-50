# 🔄 Shuffle the Array

## Problem Statement
Given an array `nums` consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn], return the array in the form [x1,y1,x2,y2,...,xn,yn].

### Examples:
```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
```

## Approaches

### 1. Extra Space Approach
- Use additional array to store result
- Time Complexity: O(n)
- Space Complexity: O(n)

### 2. In-place Approach (Optimal)
- Modify array without extra space
- Time Complexity: O(n)
- Space Complexity: O(1)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [2,5,1,3,4,7], n = 3       // Output: [2,3,5,4,1,7]
test2 = [1,2,3,4,4,3,2,1], n = 4   // Output: [1,4,2,3,3,2,4,1]
test3 = [1,1,2,2], n = 2           // Output: [1,2,1,2]
```