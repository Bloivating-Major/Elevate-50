// Brute Force
// Question Link : https://leetcode.com/problems/two-sum/description/

// Question Notes : https://fifth-ostrich-c13.notion.site/Data-Structure-and-Algorithms-9e22ce299d904026a5b16e453f22b764?pvs=4
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
};
// Brute Force
// 1. This is Brute Force Approach 
// 2. Where we are checking for each and every element and adding it to check it is equal to our target or not


// Better  Solution
let arr = [2,7,11,15], target = 9
let map = new Map();
for(let i = 0; i < arr.length; i++){
	let complement = target - arr[i];
	if(map.has(complement)){
		// Here we are checking if our array contains the sum or not
		return [map.get(complement), i]; // Map.get will return key of complement
		// i will give current index's value so eventually we will get 2 numbers.
	}
	map.set(arr[i], i); // Here we set element and index of element
	// So that we can return it if we find it's sum.
}

// Optimal 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Store original indices before sorting
    let indexedNums = nums.map((num, index) => [num, index]);

    // Sort based on values
    indexedNums.sort((a, b) => a[0] - b[0]);

    // 2 pointer approach
    let left = 0;
    let right = indexedNums.length - 1;

    while (left < right) {
        let currentSum = indexedNums[left][0] + indexedNums[right][0];

        if (currentSum === target) {
            return [indexedNums[left][1], indexedNums[right][1]]; // Return original indices
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
};