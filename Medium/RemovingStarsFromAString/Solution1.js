/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let letters = [];
    for(let letter of s){
        if('*' === letter){
            letters.pop();
        }
        else{
            letters.push(letter);
        }
    }
    return letters.join('');
};
