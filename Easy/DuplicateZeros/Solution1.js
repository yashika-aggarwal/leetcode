/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let p1 = 0;
    let p2 = arr.length-1;
    while(p1<p2){
        if(arr[p1]===0){
            while(p2>p1){
                arr[p2]=arr[p2-1];
                p2--;
            }
            p2=arr.length-1;
            p1++;
        }
        p1++;
    }
};
