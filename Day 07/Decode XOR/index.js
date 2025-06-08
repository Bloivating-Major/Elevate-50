// Decode XORed Array
// Time Complexity: O(n)
// Space Complexity: O(1) excluding output array

function decode(encoded, first) {
    let arr = [first];
    
    for(let i = 0; i < encoded.length; i++) {
        // If a ⊕ b = c, then b = a ⊕ c
        arr.push(arr[i] ^ encoded[i]);
    }
    
    return arr;
}

// Test cases
let test1 = {encoded: [1,2,3], first: 1};
let test2 = {encoded: [6,2,7,3], first: 4};
let test3 = {encoded: [5,2,4], first: 3};

console.log(decode(test1.encoded, test1.first)); // [1,0,2,1]
console.log(decode(test2.encoded, test2.first)); // [4,2,0,7,4]
console.log(decode(test3.encoded, test3.first)); // [3,6,4,0]