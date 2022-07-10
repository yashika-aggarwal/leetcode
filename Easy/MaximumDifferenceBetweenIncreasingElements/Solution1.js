/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let prefixMin = nums[0];
    let maxDiff = -1;
    for(let i=1;i<nums.length;i++){
        if(prefixMin<nums[i]){
            maxDiff = Math.max(maxDiff,(nums[i]-prefixMin));
        }
        else{
            prefixMin = nums[i];
        }
    }
    return maxDiff;
};
