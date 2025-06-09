// Matrix Diagonal Sum
// Time Complexity: O(n)
// Space Complexity: O(1)

function diagonalSum(mat) {
    const n = mat.length;
    let sum = 0;
    
    for(let i = 0; i < n; i++) {
        // Primary diagonal
        sum += mat[i][i];
        // Secondary diagonal
        sum += mat[i][n-1-i];
    }
    
    // If matrix size is odd, middle element is counted twice
    if(n % 2 === 1) {
        const mid = Math.floor(n/2);
        sum -= mat[mid][mid];
    }
    
    return sum;
}

// Test cases
let test1 = [[1,2,3],
             [4,5,6],
             [7,8,9]];

let test2 = [[1,1,1,1],
             [1,1,1,1],
             [1,1,1,1],
             [1,1,1,1]];

let test3 = [[5]];

console.log(diagonalSum(test1)); // 25
console.log(diagonalSum(test2)); // 8
console.log(diagonalSum(test3)); // 5