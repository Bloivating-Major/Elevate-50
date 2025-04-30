# 🔢 Find Numbers with Even Number of Digits

## Problem Statement
Given an array `nums` of integers, return how many of them contain an even number of digits.

### Examples:
```
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
- 12 contains 2 digits (even)
- 345 contains 3 digits (odd)
- 2 contains 1 digit (odd)
- 6 contains 1 digit (odd)
- 7896 contains 4 digits (even)
Therefore only 12 and 7896 contain an even number of digits.

Input: nums = [555,901,482,1771]
Output: 1
Explanation: Only 1771 contains an even number of digits (4).
```

## Approaches

### 1. Convert to String Approach
- Convert number to string and check length
- Simple but not recommended for interviews
- Time Complexity: O(n * log m) where m is average number value
- Space Complexity: O(1)

### 2. Mathematical Approach (Optimal)
- Count digits using division method
- More efficient and preferred in interviews
- Time Complexity: O(n * log m)
- Space Complexity: O(1)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [12,345,2,6,7896]          // Output: 2
test2 = [555,901,482,1771]         // Output: 1
test3 = [1,22,333,4444,55555]      // Output: 2
```