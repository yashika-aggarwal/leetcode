/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = currSum;
    for(let i=1; i<nums.length; i++){
        if(nums[i]>currSum+nums[i]){
            currSum = nums[i];
        }
        else{
            currSum = currSum + nums[i];
        }
        maxSum = Math.max(maxSum,currSum);
    }
    return maxSum;
};
