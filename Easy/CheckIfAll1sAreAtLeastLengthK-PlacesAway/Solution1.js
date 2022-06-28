/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let start = -1;
    for(let i=0;i<nums.length; i++){
        if(nums[i]===1 && start<0){
            start = i;
        }
        else if(nums[i]===1){
            let dis = i-start-1;
            if(dis<k){
                return false;
            }
            start = i;
        }
    }
    return true;
};
