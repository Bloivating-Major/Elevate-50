// Shuffle the Array
// Time Complexity: O(n)
// Space Complexity: O(n)

function shuffle(nums, n) {
    let result = [];
    
    // i tracks x elements, j tracks y elements
    for(let i = 0, j = n; i < n; i++, j++) {
        result.push(nums[i]);  // Add xi
        result.push(nums[j]);  // Add yi
    }
    
    return result;
}

// Test cases
let test1 = [2,5,1,3,4,7];
let test2 = [1,2,3,4,4,3,2,1];
let test3 = [1,1,2,2];

console.log(shuffle(test1, 3)); // [2,3,5,4,1,7]
console.log(shuffle(test2, 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle(test3, 2)); // [1,2,1,2]