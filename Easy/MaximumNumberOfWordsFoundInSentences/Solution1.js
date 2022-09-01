/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for(let sentence of sentences){
        let words = sentence.split(" ");
        maxWords = Math.max(maxWords,words.length);
    }
    return maxWords;
};
