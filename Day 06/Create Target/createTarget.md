# 🎯 Create Target Array in the Given Order

## Problem Statement
Given two arrays of integers `nums` and `index`. Your task is to create the target array following these rules:
- Initially target array is empty
- From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array
- Repeat the previous step until there are no elements to read in nums and index

### Examples:
```
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
```

## Approaches

### 1. Array Splice Approach
- Use array splice to insert elements at given indices
- Time Complexity: O(n²) due to shifting elements
- Space Complexity: O(n)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = nums = [0,1,2,3,4], index = [0,1,2,2,1]    // Output: [0,4,1,3,2]
test2 = nums = [1,2,3,4,0], index = [0,1,2,3,0]    // Output: [0,1,2,3,4]
test3 = nums = [1], index = [0]                     // Output: [1]
```