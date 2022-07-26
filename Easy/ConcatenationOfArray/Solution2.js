/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    for(let indx=0;indx<nums.length;indx++){
        ans[indx]=nums[indx];
        //console.log(indx+nums.length);
        ans[indx+nums.length]=nums[indx];
    }
    return ans;
};
