// Richest Customer Wealth
// Time Complexity: O(n*m)
// Space Complexity: O(1)

function maximumWealth(accounts) {
    let maxWealth = 0;
    
    for(let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        // Calculate wealth for current customer
        for(let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        // Update maximum wealth if current is greater
        if(currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    
    return maxWealth;
}

// Test cases
let test1 = [[1,2,3],[3,2,1]];
let test2 = [[1,5],[7,3],[3,5]];
let test3 = [[2,8,7],[7,1,3],[1,9,5]];

console.log(maximumWealth(test1)); // 6
console.log(maximumWealth(test2)); // 10
console.log(maximumWealth(test3)); // 17