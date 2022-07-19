/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort(function(a,b){
        return a-b;
    });
    let sum = 0;
    for(let i = Math.floor(arr.length/20);i<(arr.length-Math.floor(arr.length/20));i++){
        sum+=arr[i];
    }
    return sum/(arr.length-2*(Math.floor(arr.length/20)));
};
