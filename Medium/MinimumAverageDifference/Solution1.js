/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    let minInd = -1;
    let prefixSum = 0;
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i];
        const num2 = nums.length - i - 1 === 0? 0:Math.floor((sum-prefixSum)/(nums.length - i - 1));
        const average = Math.abs(Math.floor(prefixSum/(i+1))-num2);
        if(minInd < 0){
            minInd = i;
            nums[i] = average;
        }
        else if(average < nums[minInd]){
            minInd = i;
            nums[i] = average;
        }
    }
    return minInd;
};
