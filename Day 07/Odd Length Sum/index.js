// Sum of All Odd Length Subarrays
// Time Complexity: O(n)
// Space Complexity: O(1)

function sumOddLengthSubarrays(arr) {
    let sum = 0;
    const n = arr.length;
    
    // For each element, calculate its contribution to final sum
    for(let i = 0; i < n; i++) {
        // Calculate how many times this element appears in odd length subarrays
        let contribution = Math.floor(((i + 1) * (n - i) + 1) / 2);
        sum += arr[i] * contribution;
    }
    
    return sum;
}

// Test cases
let test1 = [1,4,2,5,3];
let test2 = [1,2];
let test3 = [10,20,30];

console.log(sumOddLengthSubarrays(test1)); // 58
console.log(sumOddLengthSubarrays(test2)); // 3
console.log(sumOddLengthSubarrays(test3)); // 90