// Count Negative Numbers in a Sorted Matrix
// Time Complexity: O(m + n)
// Space Complexity: O(1)

function countNegatives(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let row = 0;
    let col = n - 1;
    
    while (row < m && col >= 0) {
        if (grid[row][col] < 0) {
            count += (m - row); // Add all numbers below
            col--;
        } else {
            row++;
        }
    }
    
    return count;
}

// Test cases
let test1 = [
    [4,3,2,-1],
    [3,2,1,-1],
    [1,1,-1,-2],
    [-1,-1,-2,-3]
];

let test2 = [
    [3,2],
    [1,0]
];

let test3 = [
    [1,-1],
    [-1,-1]
];

console.log(countNegatives(test1)); // 8
console.log(countNegatives(test2)); // 0
console.log(countNegatives(test3)); // 3