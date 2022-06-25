/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let indx = 0;
    let decompList = [];
    while(indx<=nums.length-2){
        let freq = nums[indx];
        let value = nums[indx+1];
        let currArr = Array(freq).fill(value);
        decompList =decompList.concat(currArr);
        indx+=2;
    }
    return decompList;
};
