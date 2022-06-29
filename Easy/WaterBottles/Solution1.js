/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let emptyBottles = 0;
    let max = 0;
    while(numBottles>0){
        max+=numBottles;
        emptyBottles+=numBottles;
        numBottles = Math.floor(emptyBottles/numExchange);
        emptyBottles -= numBottles*numExchange;
    }
    return max;
};
