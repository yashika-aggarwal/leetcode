/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let left = 0;
    let right = nums.length;
    let min=Infinity;
    while(left<=right){
        if(nums[left]===target){
            min = Math.min(min,Math.abs(start-left));
        }
        if(nums[right]===target){
            min = Math.min(min,Math.abs(start-right));
        }
        left++;
        right--;
    }
    return min;
    
};
