# 📊 How Many Numbers Are Smaller Than the Current Number

## Problem Statement
Given an array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it.

### Examples:
```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
- 8 has 4 smaller numbers (1,2,2,3)
- 1 has 0 smaller numbers
- 2 has 1 smaller number (1)
- 2 has 1 smaller number (1)
- 3 has 3 smaller numbers (1,2,2)

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
```

## Approaches

### 1. Counting Sort Approach (Optimal)
- Create frequency array
- Calculate running sum
- Time Complexity: O(n)
- Space Complexity: O(1) since array size is fixed to 101

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [8,1,2,2,3]    // Output: [4,0,1,1,3]
test2 = [6,5,4,8]      // Output: [2,1,0,3]
test3 = [7,7,7,7]      // Output: [0,0,0,0]
```