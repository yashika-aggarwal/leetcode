/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let p1 = 0;
    let p2 = n;
    let shuffArr =[];
    while(p1<n){
        shuffArr.push(nums[p1],nums[p2]);
        p1++;
        p2++;
    }
    return shuffArr;
};
