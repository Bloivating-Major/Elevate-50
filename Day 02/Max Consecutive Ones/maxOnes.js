// Kadane's Algorithm
var findMaxConsecutiveOnes = function (nums){
    let maxOnes = count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
            maxOnes = Math.max(maxOnes, count);
        }else{
            count = 0;
        }
    }

    return maxOnes;
}