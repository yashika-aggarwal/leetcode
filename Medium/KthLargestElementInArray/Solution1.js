/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
       let pivot = left + Math.floor((right-left)/2);
        let pivotValue = nums[pivot];
        nums[pivot] = nums[right];
        nums[right] = pivotValue;
        for(let i =left; i<right;i++){
            if(nums[i]>=pivotValue){
                let num = nums[i];
                nums[i] = nums[left];
                nums[left] = num;
                left++;
            }
        }
        nums[right] = nums[left];
        nums[left]=pivotValue;
        if(left===k-1){
            return nums[left];
        }
        else if(left>k-1){
            right = left-1; 
            left = 0;
        } 
        else{
            left++;
        }
    }
};
