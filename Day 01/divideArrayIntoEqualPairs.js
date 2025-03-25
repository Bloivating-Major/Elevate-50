
// Question : https://leetcode.com/problems/divide-array-into-equal-pairs/description/

// Solution

var divideArray = function(nums) {
    nums.sort((a,b) => a-b);
    let pair = 0;

    for(let i = 0; i < nums.length; i+=2){
        if(nums[i] == nums[i+1]) pair++;
    }

    return pair == nums.length/2;
};

// Approach
// -- we can sort the array
// -- then what we will do is check elem 1 with elem 2 if its equal then its pair
// -- and we will increment our counter with 2 indexes
// Step 1 
// -- sort the array
// -- loop through the length of array
// -- check if num1 is equal to num2 
// -- if yes then pair is found
// -- if no then move ahead