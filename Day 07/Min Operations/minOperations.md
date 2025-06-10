# 🔢 Minimum Operations to Make Array Sum Divisible by K

## Problem Statement
You are given an integer array `nums` and an integer `k`. You can perform the following operation any number of times:
- Select an index `i` and replace `nums[i]` with `nums[i] - 1`.

Return the minimum number of operations required to make the sum of the array divisible by `k`.

### Examples:
```
Input: nums = [3,9,7], k = 5
Output: 4
Explanation: Perform 4 operations on nums[1] = 9. Now, nums = [3,5,7].
The sum is 15, which is divisible by 5.

Input: nums = [1,2,3], k = 5
Output: 1
Explanation: Perform 1 operation on nums[2] = 3. Now, nums = [1,2,2].
The sum is 5, which is divisible by 5.
```

## Approaches

### 1. Modular Arithmetic Approach
- Calculate the current sum of the array
- Find the remainder when divided by k
- If remainder is 0, no operations needed
- Otherwise, we need to subtract (k - remainder) to reach the next lower multiple of k
- Time Complexity: O(n)
- Space Complexity: O(1)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = {nums: [3,9,7], k: 5}     // Output: 4
test2 = {nums: [1,2,3], k: 5}     // Output: 1
test3 = {nums: [5,5,5], k: 5}     // Output: 0
```
