// Count Good Triplets
// Time Complexity: O(n³)
// Space Complexity: O(1)

function countGoodTriplets(arr, a, b, c) {
    const n = arr.length;
    let count = 0;
    
    for(let i = 0; i < n - 2; i++) {
        for(let j = i + 1; j < n - 1; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) continue;
            
            for(let k = j + 1; k < n; k++) {
                if(Math.abs(arr[j] - arr[k]) <= b && 
                   Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }
        }
    }
    
    return count;
}

// Test cases
let test1 = {arr: [3,0,1,1,9,7], a: 7, b: 2, c: 3};
let test2 = {arr: [1,1,2,2,3], a: 0, b: 0, c: 1};
let test3 = {arr: [7,3,7,3,12,1,12,2,3], a: 5, b: 8, c: 1};

console.log(countGoodTriplets(test1.arr, test1.a, test1.b, test1.c)); // 4
console.log(countGoodTriplets(test2.arr, test2.a, test2.b, test2.c)); // 0
console.log(countGoodTriplets(test3.arr, test3.a, test3.b, test3.c)); // 12