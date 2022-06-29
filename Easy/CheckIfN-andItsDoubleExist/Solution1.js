/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let doubles = new Set();
    for(let num of arr){
        let double = num*2;
        if(doubles.has(double)|| doubles.has(num/2)){
            return true;
        }
        else{
            doubles.add(num);
        }
    }
    return false;
};
