/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let Ls = 0;
    let Rs = 0;
    let max = 0;
    for(let char of s){
        if(char==="L"){
            Ls++;
        }
        if(char==="R"){
            Rs++;
        }
        if(Ls===Rs){
            max++;
            Ls=0;
            Rs=0;
        }
    }
    return max;
};
