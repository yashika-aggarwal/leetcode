/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count =0;
    for(let i = 0; i<nums.length; i++){
        let ele = nums[i];
        let digits =1;
        while(ele>=10){
            ele = (ele - (ele%10))/10;
            digits++;
        }
        if(digits%2===0){
            count++;
        }
    }
    return count;
};
