/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const charCount = new Map();
    for(let char of s){
        if(charCount.has(char)){
            charCount.set(char,charCount.get(char)+1);
        }
        else{
            charCount.set(char,1);
        }
    }
    const counts = charCount.get(s[0]);
    for(let count of charCount.values()){
        if(count!==counts){
            return false;
        }
    }
    return true;
};
