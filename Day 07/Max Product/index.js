// Maximum Product of Two Elements
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxProduct(nums) {
    let max1 = 0;
    let max2 = 0;
    
    for(let num of nums) {
        if(num > max1) {
            max2 = max1;
            max1 = num;
        } else if(num > max2) {
            max2 = num;
        }
    }
    
    return (max1 - 1) * (max2 - 1);
}

// Test cases
let test1 = [3,4,5,2];
let test2 = [1,5,4,5];
let test3 = [3,7];

console.log(maxProduct(test1)); // 12
console.log(maxProduct(test2)); // 16
console.log(maxProduct(test3)); // 12