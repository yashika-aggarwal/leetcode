/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    for(let skipIndx =0; skipIndx<nums.length;skipIndx++){
        let arr = nums.slice(0,skipIndx).concat(nums.slice(skipIndx+1));
        let isSorted = true;
        for(let indx=1;indx<arr.length;indx++){
            if(arr[indx-1]>=arr[indx]){
                isSorted=false;
            }
        }
        if(isSorted){
            return true;
        }
    }
    return false;
};
