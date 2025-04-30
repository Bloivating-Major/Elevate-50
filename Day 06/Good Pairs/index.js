// Number of Good Pairs
// Time Complexity: O(n)
// Space Complexity: O(n)

function numIdenticalPairs(nums) {
    let count = new Map();
    let pairs = 0;
    
    // Count frequency of each number
    for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    // Calculate pairs using combination formula
    for(let freq of count.values()) {
        pairs += (freq * (freq - 1)) / 2;
    }
    
    return pairs;
}

// Test cases
let test1 = [1,2,3,1,1,3];
let test2 = [1,1,1,1];
let test3 = [1,2,3];

console.log(numIdenticalPairs(test1)); // 4
console.log(numIdenticalPairs(test2)); // 6
console.log(numIdenticalPairs(test3)); // 0