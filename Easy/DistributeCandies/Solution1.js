/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
   let candies = new Set();
    let maxCandies=0;
    for(let i=0; i<candyType.length;i++){
        if(!candies.has(candyType[i])){
            candies.add(candyType[i]);
            if(maxCandies<(candyType.length/2)){
                maxCandies++;
            }
        }
    }
    return maxCandies;
};
