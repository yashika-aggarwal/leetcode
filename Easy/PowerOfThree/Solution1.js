/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0){
        return false;
    }
    let powerOf3 = Math.log10(n)/Math.log10(3);
    return (powerOf3 - Math.trunc(powerOf3)) === 0 ? true: false; 
};
