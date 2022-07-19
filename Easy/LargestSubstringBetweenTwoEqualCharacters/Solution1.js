/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const positions = new Map();
    let maxLen = -1;
    for(let pos in s){
        let char = s[pos];
        if(positions.has(char)){
            let len = pos-positions.get(char)-1;
            maxLen = Math.max(len,maxLen);
        }
        else{
            positions.set(char,pos);
        }
    }
    return maxLen;
};
