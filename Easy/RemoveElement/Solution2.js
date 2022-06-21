/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let p1 = 0;
  let p2 = nums.length-1;
  while(p1<=p2){
    if(nums[p1]===val){
        if(nums[p2]!==val){
            nums[p1]=nums[p2];
            p1++;
        }
        p2--;
    }
    else{
        p1++;
    }
 }
    return p1; 
};
