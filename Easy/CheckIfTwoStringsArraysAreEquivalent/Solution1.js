/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let string1 = '';
    let string2 = '';
    for(let str of word1){
        string1+=str;
    }
    for(let str of word2){
        string2+=str;
    }
    let len = string2.length
    if(string1.length !== len){
        return false;
    }
    for(let i = 0; i < len; i++){
        if(string2[i] !== string1[i]){
            return false;
        }
    }
    return true;
};
