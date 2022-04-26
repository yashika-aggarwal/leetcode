/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var num = nums[0];
    for(indx=1;indx<nums.length;indx++){
        num = num^nums[indx];
    }
    return num;
};
