// Find the Highest Altitude
// Time Complexity: O(n)
// Space Complexity: O(1)

function largestAltitude(gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;
    
    for(let change of gain) {
        currentAltitude += change;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }
    
    return maxAltitude;
}

// Test cases
let test1 = [-5,1,5,0,-7];
let test2 = [-4,-3,-2,-1,4,3,2];
let test3 = [1,2,3,4];

console.log(largestAltitude(test1)); // 1
console.log(largestAltitude(test2)); // 0
console.log(largestAltitude(test3)); // 10