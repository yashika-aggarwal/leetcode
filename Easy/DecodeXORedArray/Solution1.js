/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = [first];
    let indx = 1;
    for(let code of encoded){
        arr[indx]= code^arr[indx-1];
        indx++;
    }
    return arr;
};
