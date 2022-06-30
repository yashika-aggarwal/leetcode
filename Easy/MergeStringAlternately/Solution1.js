/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedStr = "";
    let size = word1.length;
    if(word2.length>word1.length){
        size = word2.length;
    }
    for(let i=0;i<size;i++){
        if(i<word1.length){
            mergedStr+=word1[i];
        }
        if(i<word2.length){
            mergedStr+=word2[i];
        }
    }
    return mergedStr;
};
