/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let sum = 0;
    for(let num of nums){
        if(num % 2 === 0){
            sum += num;
        }
    }
    let sums = [];
    for(let query of queries){
        let [val,index] = query;
        if(nums[index] % 2 === 0){
            sum -= nums[index];
        }
        nums[index] = nums[index] + val;
        if(nums[index] % 2 === 0){
            sum += nums[index];
        }
        sums.push(sum);
    }
    return sums;
};
