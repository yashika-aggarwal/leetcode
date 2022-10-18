/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let inPair = false;
    let asteriskCount = 0;
    for(let char of s){
        if(char === "|"){
            inPair = !inPair;
        }
        else if(char === "*" && !inPair){
            asteriskCount++;
        }
    }
    return asteriskCount;
};
