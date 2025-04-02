# Is Subsequence

**📌 Question Link:** [Is Subsequence - LeetCode](https://leetcode.com/problems/is-subsequence/description/)

## Problem Statement
Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`, or `false` otherwise.
A subsequence of a string is a new string formed from the original string by deleting some (or none) of the characters without disturbing the relative positions of the remaining characters.

### Example 1:
```js
Input: s = "abc", t = "ahbgdc"
Output: true
```

### Example 2:
```js
Input: s = "axc", t = "ahbgdc"
Output: false
```

---

## Intuition
We need to check if the characters of `s` appear in `t` in the same order. We can do this by iterating through `t` and checking if we find all characters of `s` sequentially.

---

## Approach 1: Using While Loop
### Explanation:
1. Use a pointer `sequenceIndex` to track progress in `s`.
2. Iterate through `t` and check if the current character matches `s[sequenceIndex]`.
3. If a match is found, increment `sequenceIndex`.
4. If `sequenceIndex` reaches the length of `s`, return `true`.
5. If we finish iterating `t` without finding all characters of `s`, return `false`.

### Code:
```js
var isSubsequence = function(s, t) {
    let sequenceIndex = 0;
    let i = 0;
    
    while (i < t.length) {
        if (sequenceIndex === s.length) return true;
        if (s[sequenceIndex] === t[i]) sequenceIndex++;
        i++;
    }
    return sequenceIndex === s.length;
};
```

### Complexity Analysis:
- **Time Complexity:** `O(n)`, where `n` is the length of `t`.
- **Space Complexity:** `O(1)`, as we use only a few extra variables.

---

## Approach 2: Using For Loop
### Explanation:
1. Similar logic to the `while` loop but using a `for` loop instead.
2. Iterate through `t`, check for matches, and increment `sequenceIndex` accordingly.
3. If `sequenceIndex` reaches the length of `s`, return `true`.

### Code:
```js
var isSubsequence = function(s, t) {
    let sequenceIndex = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (sequenceIndex === s.length) return true;
        if (s[sequenceIndex] === t[i]) sequenceIndex++;
    }
    return sequenceIndex === s.length;
};
```

### Complexity Analysis:
- **Time Complexity:** `O(n)`, as we iterate through `t` once.
- **Space Complexity:** `O(1)`, as we use only a few extra variables.

---

## Summary
✅ **Both approaches efficiently check if `s` is a subsequence of `t` in O(n) time and O(1) space.**
💡 **Using a for loop or while loop depends on personal preference.**
🔥 **Great problem to practice pointer-based traversal in strings!**