/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowSet = new Set(allowed);
    let count = 0;
    for(let word of words){
        let isConsistent = true;
        for(let char of word){
            if(!allowSet.has(char)){
                isConsistent = false;
            }
        }
        if(isConsistent){
            count++;
        }
    }
    return count;
};
