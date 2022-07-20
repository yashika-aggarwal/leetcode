/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let wordCount = 0;
    for(let indx =0;indx<s.length;indx++){
        if(s[indx]===" "){
            wordCount++;
            if(wordCount===k){
                return s.slice(0,indx);
            }
        }
    }
    return s;
};
