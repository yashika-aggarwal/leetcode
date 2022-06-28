/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let prevChar = 0;;
    let maxLen = 1;
    for(let i=1;i<s.length;i++){
        if(s[prevChar] ===s[i]){
            let len = i-prevChar+1;
            maxLen = Math.max(maxLen,len);
        }
        else{
            prevChar = i;
        }
    }
    return maxLen;
};
