// Brute Force
// Step 1 : create a squared array
// Step 2 : sort the squared array
var sortedSquares = function(nums){
    let squaredArr = nums.map((num) => num * num);
    squaredArr.sort((a,b) => a - b);
    return squaredArr;
}

// Optmized Version
// Step 1 create 2 pointer left and right
// left starts from 0 and right starts from length - 1
// we will store our result in new array
// Step 2 run a while loop until left pointer is greater then right pointer
// Step 3 square the left and right pointer numbers
// if left square is greater than right square store it in result array and left pointer + +
// else store result of right and right + +
// finally index - - 
// return the result array
var sortedSquares = function(nums){
    let n = nums.length;
    let result = new Array(n);
    let left = 0, right = n - 1, index = n - 1;

    while(left <= right){
        let leftResult = nums[left] * nums[left];
        let rightResult = nums[right] * nums[right];

         if(left > right){
            result[index] = leftResult;
            left++;
         }else{
            result[index] = rightResult;
            right--;
         }
         index--;
    }
    return result;
}