/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let x = nums[0];
    let answer =[];
    if(x%5===0){
        answer.push(true);
    }
    else{
        answer.push(false);
    }
    for(let i =1;i<nums.length;i++){
        x = (2*x)%10 + nums[i];
         if(x%5===0){
            answer.push(true);
        }
        else{
            answer.push(false);
         }
    }
    return answer;
};
