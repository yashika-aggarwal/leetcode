/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let is2Bit = false;
    for(let i=0; i<bits.length; i++){
        if(bits[i]===1){
            i++;
            is2Bit = true;
        }
        else{
            is2Bit = false;
        }
    }
    return !is2Bit;
};
