// Find Numbers with Even Number of Digits
// Time Complexity: O(n * log m) where m is average number value
// Space Complexity: O(1)

function findNumbers(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        // Count digits using mathematical approach
        let digits = countDigits(nums[i]);
        if(digits % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

// Helper function to count digits
function countDigits(num) {
    let digits = 0;
    while(num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }
    return digits;
}

// Test cases
let test1 = [12,345,2,6,7896];
let test2 = [555,901,482,1771];
let test3 = [1,22,333,4444,55555];

console.log(findNumbers(test1)); // 2
console.log(findNumbers(test2)); // 1
console.log(findNumbers(test3)); // 2