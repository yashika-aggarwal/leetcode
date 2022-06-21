/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = p1+1;
    while(p2<nums.length){
        if(nums[p2]>nums[p1]){
            p1++;
            nums[p1]=nums[p2];
        }
        else{
            p2++;
        }
    }
    return p1+1;
};
