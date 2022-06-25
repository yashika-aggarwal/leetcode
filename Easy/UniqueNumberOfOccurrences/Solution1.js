/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = new Map();
    for(let num of arr){
        if(count.has(num)){
            count.set(num,count.get(num)+1);
        }
        else{
            count.set(num,1);
        }
    }
    let counts = new Set();
    for(let value of count.values()){
        if(counts.has(value)){
            return false;
        }
        counts.add(value);
    }
    return true;
};
