/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      var N = nums.length;
      var i = 0 ; 
    if(nums[i]!==nums[i+1]) {
         i++;
        console.log(i);
         for(j=1; j<N-1; j++) {
               console.log(i);
             if(nums[i]!==nums[j]) {
                i++;
             }
             else {
                 if(nums[j]!==nums[j+1]) {
                 i++;
                nums[i] =nums[j+1];
                 }
            }
        }
    }
     else {
            for(j=1; j<N-1; j++) {
                 if(nums[i]!==nums[j]) {
                    i++;
                 }
                else {
                 if(nums[j]!==nums[j+1]) {
                 i++;
                nums[i] =nums[j+1];
                 }
                }
            }
        }
    var k = i+1;
    return k;
};
