/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i = 0;
    var j = nums.length-1;
    while(i<=j){
       var m = Math.floor((i+j)/2);
         if(nums[m]<target){
            i = m+1;//2
        }
        else if(nums[m]>target) {
            j = m-1;
        }
        else{
            return m;
        }
    }
      return i;
};
