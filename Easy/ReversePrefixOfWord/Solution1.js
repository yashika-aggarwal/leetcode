/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let prefix =  word.match(ch);
    if(!prefix){
        return word;
    }
    let prefixIndx = prefix.index;
    let reverse = ""
    for(let i = prefixIndx;i>=0;i--){
        reverse+=word[i];
    }
    return reverse+word.substring(prefixIndx+1);
};
