// Running Sum of 1D Array
// Time Complexity: O(n)
// Space Complexity: O(1)

function runningSum(nums) {
    // Start from index 1 as first element is already a running sum
    for(let i = 1; i < nums.length; i++) {
        // Add previous sum to current element
        nums[i] = nums[i] + nums[i-1];
    }
    return nums;
}

// Test cases
let test1 = [1,2,3,4];
let test2 = [1,1,1,1,1];
let test3 = [3,1,2,10,1];

console.log(runningSum(test1)); // [1,3,6,10]
console.log(runningSum(test2)); // [1,2,3,4,5]
console.log(runningSum(test3)); // [3,4,6,16,17]