// Create Target Array in the Given Order
// Time Complexity: O(n²)
// Space Complexity: O(n)

function createTargetArray(nums, index) {
    let target = [];
    
    for(let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    
    return target;
}

// Test cases
let test1_nums = [0,1,2,3,4], test1_index = [0,1,2,2,1];
let test2_nums = [1,2,3,4,0], test2_index = [0,1,2,3,0];
let test3_nums = [1], test3_index = [0];

console.log(createTargetArray(test1_nums, test1_index)); // [0,4,1,3,2]
console.log(createTargetArray(test2_nums, test2_index)); // [0,1,2,3,4]
console.log(createTargetArray(test3_nums, test3_index)); // [1]