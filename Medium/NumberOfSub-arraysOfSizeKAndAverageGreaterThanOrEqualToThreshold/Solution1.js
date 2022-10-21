/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let subArr = 0;
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }
    for(let i = k; i <= arr.length; i++){
        if(sum/k >= threshold){
            subArr++;
        }   
        sum -= arr[i-k];
        sum += arr[i];
    }
    return subArr;
};
