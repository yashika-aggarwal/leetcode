/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort(function(a,b){return a - b;});
    for(let i = nums.length - 3; i > -1; i--){
        let sum = nums[i] + nums[i+1];
        if(sum > nums[i+2]){
            return sum + nums[i+2];
        }
    }
    return 0;
};
