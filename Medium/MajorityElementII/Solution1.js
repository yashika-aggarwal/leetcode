/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length===1){
        return [nums[0]];
    }
   let elements = new Map();
   const majority = new Set();
   for(let i=0; i<nums.length; i++){
       let currEle =nums[i];
       if(elements.has(currEle)){
           elements.set(currEle,elements.get(currEle)+1);
           if(elements.get(currEle)> nums.length/3){
                majority.add(currEle);
           }
       }
       else{
           elements.set(currEle,1);
            if(elements.get(currEle)> nums.length/3){
                majority.add(currEle);
           }
       }
   }
   return [...majority.keys()];
};
