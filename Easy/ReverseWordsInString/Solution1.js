/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(" ");
    let reversed = '';
    for(let j = 0; j < words.length; j++){
        let word = words[j];
        for(let i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }
        if(j < words.length - 1){
            reversed += ' ';
        }
    }
    return reversed;
};
