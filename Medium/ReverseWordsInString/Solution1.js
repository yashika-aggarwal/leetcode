/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    const re = /\s+/;
    const words = s.split(re);
    let reversedStr = '';
    for(let i = words.length - 1; i > 0; i--){
        if(words[i].length !== 0){
            reversedStr += (words[i] + ' ');
        }
    }
    reversedStr += words[0];
    return reversedStr;
};
