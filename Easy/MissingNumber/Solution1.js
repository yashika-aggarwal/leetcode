/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numbers = new Set(nums);
    for(let num =0; num<=nums.length; num++){
        if(!numbers.has(num)){
            return num;
        }
    }
};
