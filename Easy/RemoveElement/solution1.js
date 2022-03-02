/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var N = nums.length;
    var i = 0;
    var j = N-1;
    if(N===0 || N===1 && nums[i]===val || N===2 && nums[i] === nums[j] && nums[i]=== val) {
        return 0;
    }
    else if(N===2 && nums[i] !==nums[j] ) {
        if(nums[i]===val) {
            nums[i] = nums[j]; 
             return 1;
        }
        else {
            if(nums[j] !==val) {
                return 2;
            }
            else {
                return 1;
            }
        }
       
    }
    else {
        while(i!==j) {
        if(nums[i] ===val) {
            if(nums[j] === val) {
                j--;
            }
            else{
                nums[i]=nums[j];
                j--;
            }
        }
        else {
            i++;
        }
    }
    if(nums[i] === val) {
        return i;
    }
    else {
      var k = i+1;
    return k;   
    }  
    
    }
    
};
