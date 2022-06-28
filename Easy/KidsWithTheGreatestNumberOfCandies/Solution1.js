/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for(let candy of candies){
        if(candy+extraCandies>=Math.max(...candies)){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
};
