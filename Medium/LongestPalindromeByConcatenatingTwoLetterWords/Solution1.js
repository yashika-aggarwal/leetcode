/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const wordCount = new Map();
    let maxLen = 0;
    for(let word of words){
        if(wordCount.has(word)){
            wordCount.set(word,wordCount.get(word) + 1);
        }
        else{
            wordCount.set(word,1);
        }
    }
    let odd = false;
    for(let word of wordCount.keys()){
        let reverse = word[1] + word[0];
        if(word[0] === word[1]){
            if(wordCount.get(word) % 2 !== 0 && !odd){
                odd = true;
                maxLen += 2;
            }
            maxLen += 2*(2* Math.floor(wordCount.get(word) / 2));
            wordCount.delete(word);
        }
        else if(wordCount.has(reverse)){
            let count = Math.min(wordCount.get(word),wordCount.get(reverse));
            maxLen += (4 * count);
            wordCount.delete(word);
            wordCount.delete(reverse);
        }
    }
    return maxLen;
};
