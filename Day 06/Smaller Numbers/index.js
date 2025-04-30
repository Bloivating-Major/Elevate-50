// How Many Numbers Are Smaller Than the Current Number
// Time Complexity: O(n)
// Space Complexity: O(1)

function smallerNumbersThanCurrent(nums) {
    // Count frequency of each number (0-100)
    let count = new Array(101).fill(0);
    for(let num of nums) {
        count[num]++;
    }
    
    // Calculate running sum
    for(let i = 1; i < 101; i++) {
        count[i] += count[i-1];
    }
    
    // Generate result
    let result = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        result[i] = nums[i] === 0 ? 0 : count[nums[i]-1];
    }
    
    return result;
}

// Test cases
let test1 = [8,1,2,2,3];
let test2 = [6,5,4,8];
let test3 = [7,7,7,7];

console.log(smallerNumbersThanCurrent(test1)); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent(test2)); // [2,1,0,3]
console.log(smallerNumbersThanCurrent(test3)); // [0,0,0,0]