/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ");
    let indx =0;
    while(indx<words.length){
        let word = words[indx];
        if(word.search(searchWord)===0){
            return indx+1;
        }
        indx++;
    }
    return -1;
};
