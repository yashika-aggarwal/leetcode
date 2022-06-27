/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let IntCount = new Map();
    for(let integer of arr){
        if(IntCount.has(integer)){
            IntCount.set(integer,IntCount.get(integer)+1);
        }
        else{
            IntCount.set(integer,1);
        }
    }
    let luckyNum = -1;
    for(let pair of IntCount.entries()){
        if(pair[0]===pair[1]){
            luckyNum = Math.max(luckyNum,pair[0]);
        }
    }
    return luckyNum;
};
