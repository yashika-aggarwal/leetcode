/**
 * @param {number[]} nums
 * @return {number[]}
 */

function isEven(ele){
    if(ele%2===0){
        return true;
    }
        return false;
} 

var sortArrayByParity = function(nums) {
    var pointer1 = 0;
    var pointer2=nums.length-1;
    
    while(pointer1<=pointer2){
        var ele1=nums[pointer1];
        var ele2 = nums[pointer2];
        if(!isEven(ele1) && isEven(ele2)){
            nums[pointer2]=ele1;
            nums[pointer1]=ele2;
        }
         if(!isEven(ele2)){
             pointer2--;
         }
        if(isEven(ele1)){
             pointer1++;
        }
    }
    return nums;
};
