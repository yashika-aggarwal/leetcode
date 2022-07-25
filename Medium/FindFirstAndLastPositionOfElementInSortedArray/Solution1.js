/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0; 
    let right = nums.length-1; 
    let start = nums.length;
    let end = -1;
    while(left<=right){
        let middle = left + Math.floor((right-left)/2);
        if(nums[middle]===target){
            start = Math.min(start,middle);
            end = Math.max(end,middle);
            if(nums[middle-1]!==target && nums[middle+1]!==target){
                return [start,end];
            }
            if(nums[middle-1]===target){
                start = Math.min(start,searchRange(nums.slice(0,middle),target)[0]);
            }
            if(nums[middle+1]===target){
                end = Math.max(start,middle+1+searchRange(nums.slice(middle+1),target)[1]);
            }
            return [start,end]
        }
        else if(nums[middle]<target){
            left = middle +1;
        }
        else{
            right = middle-1;
        }
    }
    return [-1,-1];
};
