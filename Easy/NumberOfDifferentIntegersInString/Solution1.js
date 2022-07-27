/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let integers = word.split(/\D+/);
    let intCount =0;
    const intSet = new Set();
    for(let int of integers){
        let num =parseInt(int);
        if(num===Infinity){
            num = BigInt(int);
        }
        if(int.length>0 && !intSet.has(num)){
            intSet.add(num);
            intCount++;
        }
    }
    return intCount;
};
