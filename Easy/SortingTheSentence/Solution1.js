/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ");
    words.sort(function(a,b){
        return a[a.length-1]-b[b.length-1];
    });
    let sortedSentence = '';
    for(let indx in words){
        let word = words[indx];
        sortedSentence+=word.slice(0,word.length-1);
        if(indx<(words.length-1)){
            sortedSentence+=" ";
        }
    }
    return sortedSentence;
};
