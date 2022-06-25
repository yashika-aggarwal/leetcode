/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let indx = arr.length-1;
    let max = -1;
    while(indx>=0){
        let curr = arr[indx];
        arr[indx]=max;
        max = Math.max(max,curr);
        indx--;
    }
    return arr;
};
