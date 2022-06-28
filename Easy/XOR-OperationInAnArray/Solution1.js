/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let indx = 1;
    let xor = start;
    while(indx<n){
        let currEle = start+2*indx;
        xor^=currEle;
        indx++;
    }
    return xor;
};
