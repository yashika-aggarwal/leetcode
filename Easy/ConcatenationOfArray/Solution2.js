/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    for(let indx=0;indx<nums.length;indx++){
        ans[indx]=nums[indx];
        ans[indx+nums.length]=nums[indx];
    }
    return ans;
};
