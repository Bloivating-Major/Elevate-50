# 🍬 Kids With the Greatest Number of Candies

## Problem Statement
Given an array `candies` where `candies[i]` represents the number of candies that the ith kid has, and an integer `extraCandies`, return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the ith kid all the `extraCandies`, they will have the greatest number of candies among all the kids, or `false` otherwise.

### Examples:
```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:
- Kid 1: 2 + 3 = 5 candies (greatest among all kids)
- Kid 2: 3 + 3 = 6 candies (greatest among all kids)
- Kid 3: 5 + 3 = 8 candies (greatest among all kids)
- Kid 4: 1 + 3 = 4 candies (not greatest)
- Kid 5: 3 + 3 = 6 candies (greatest among all kids)

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
```

## Approaches

### 1. Find Max and Compare Approach
- Find maximum candies in array
- Compare each kid's candies + extraCandies with max
- Time Complexity: O(n)
- Space Complexity: O(1) (not counting output array)

### Code Implementation
Check the solution in [index.js](./index.js)

## Test Cases
```javascript
test1 = [2,3,5,1,3], extraCandies = 3    // [true,true,true,false,true]
test2 = [4,2,1,1,2], extraCandies = 1    // [true,false,false,false,false]
test3 = [12,1,12], extraCandies = 10     // [true,false,true]
```