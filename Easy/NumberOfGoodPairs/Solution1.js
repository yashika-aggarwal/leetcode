/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counts = new Map();
    for(let num of nums){
        if(counts.has(num)){
            counts.set(num,counts.get(num)+1);
        }
        else{
            counts.set(num,1);
        }
    }
    let pairCount = 0;
    for(let count of counts.values()){
        let currCount = (count*(count-1))/2;
        pairCount+=currCount;
    }
    return pairCount;
};
