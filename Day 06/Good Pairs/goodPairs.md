# 👥 Number of Good Pairs

## Problem Statement
Given an array of integers `nums`, return the number of good pairs. A pair `(i,j)` is called good if `nums[i] == nums[j]` and `i < j`.

### Examples:
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```

## Approaches

### 1. Hash Map Approach (Optimal)
- Count frequency of each number
- Use combination formula
- Time Complexity: O(n)
- Space Complexity: O(n)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [1,2,3,1,1,3]    // Output: 4
test2 = [1,1,1,1]        // Output: 6
test3 = [1,2,3]          // Output: 0
```