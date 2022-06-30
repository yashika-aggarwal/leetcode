/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let counts = new Map();
    let sum = 0;
    for(let num of nums){
        if(counts.has(num)){
            let count = counts.get(num)+1;
            counts.set(num,count);
            if(count===2){
                sum-=num;
            }
        }
        else{
            counts.set(num,1);
            sum+=num;
        }
    }
    return sum;
};
