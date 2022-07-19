/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let minOps = 0;
    for(let indx = 1;indx<nums.length;indx++){
        if(nums[indx]<=nums[indx-1]){
            minOps += nums[indx-1]-nums[indx]+1;
            nums[indx]= nums[indx-1]+1;
        }
    }
    return minOps;
};
