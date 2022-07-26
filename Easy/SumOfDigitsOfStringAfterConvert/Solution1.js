/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let int = '';
    for(let letter of s){
        let position = letter.charCodeAt(0)-96;
        int+=position;
    }
    while(k>0){
        let sum = 0;
        for(let digit of int){
            sum+=parseInt(digit);
        }
        int = "" +sum;
        k--;
    }
    return parseInt(int);
};
