Question Link -> https://leetcode.com/problems/majority-element/

# 🗳️ Moore’s Voting Algorithm – Majority Element (> n/2 times)

## 📘️ Problem Statement
Given an array of size `n`, find the **majority element**, i.e., the element that appears **more than ⌊n/2⌋ times**.

---

## 🧠 Intuition
If an element appears more than `n/2` times, it will **survive all cancellations** when we keep removing pairs of different elements. This idea leads us to Moore’s Voting Algorithm.

---

## ⟳ Step-by-step Explanation
1. **Initialize:**
   - Set `candidate = arr[0]`
   - Set `count = 1`

2. **Loop from index 1 to end:**
   - If `count == 0`:
     - Set `candidate = arr[i]`
     - Reset `count = 1`
   - Else if `arr[i] == candidate`:
     - Increment `count`
   - Else:
     - Decrement `count`

3. **After the loop**, `candidate` may be the answer.  
   To be 100% sure, do a **second pass** to confirm it occurs more than `n/2` times.

---

## 💻 Code Example (JavaScript)

```js
function findMajorityElement(arr) {
  let candidate = arr[0];
  let count = 1;

  // Phase 1: Find candidate
  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify the candidate
  count = 0;
  for (let num of arr) {
    if (num === candidate) count++;
  }

  return count > Math.floor(arr.length / 2) ? candidate : -1;
}

// Example usage:
const arr = [2, 2, 1, 1, 2, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
```

---

## 🧪 Dry Run

For `arr = [2, 2, 1, 1, 2, 2, 2]`:

| i | arr[i] | candidate | count |
|---|--------|-----------|-------|
| 0 |   2    |     2     |   1   |
| 1 |   2    |     2     |   2   |
| 2 |   1    |     2     |   1   |
| 3 |   1    |     2     |   0   |
| 4 |   2    |     2     |   1   |
| 5 |   2    |     2     |   2   |
| 6 |   2    |     2     |   3   |

Final candidate = 2  
Count of 2 = 5 > n/2 (3.5) → ✅ Majority Element

---

## 📌 Time & Space Complexity

| Metric           | Value |
|------------------|--------|
| Time Complexity  | O(n)   |
| Space Complexity | O(1)   |

