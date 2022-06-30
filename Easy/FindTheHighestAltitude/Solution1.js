/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prevAlt = 0;
    let maxAlt = prevAlt;
    for(let point of gain){
        let currAlt = prevAlt+point;
        maxAlt = Math.max(maxAlt,currAlt);
        prevAlt = currAlt;
    }
    return maxAlt;
};
