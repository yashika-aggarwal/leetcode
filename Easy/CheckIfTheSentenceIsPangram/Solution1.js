/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let chars = new Set();
    for(let char of sentence){
        if(!chars.has(char)){
            chars.add(char);
        }
    }
    return chars.size===26? true:false;
};
