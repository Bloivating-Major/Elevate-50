// Kids With the Greatest Number of Candies
// Time Complexity: O(n)
// Space Complexity: O(1)

function kidsWithCandies(candies, extraCandies) {
    // Find maximum candies
    let maxCandies = 0;
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }
    
    // Check each kid
    let result = [];
    for(let i = 0; i < candies.length; i++) {
        result[i] = (candies[i] + extraCandies >= maxCandies);
    }
    
    return result;
}

// Test cases
let test1 = [2,3,5,1,3];
let test2 = [4,2,1,1,2];
let test3 = [12,1,12];

console.log(kidsWithCandies(test1, 3)); // [true,true,true,false,true]
console.log(kidsWithCandies(test2, 1)); // [true,false,false,false,false]
console.log(kidsWithCandies(test3, 10)); // [true,false,true]