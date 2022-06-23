/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3){
        return false;
    }
    let hasPeeked = false;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
            hasPeeked = true
        }
        if(!hasPeeked){
            if(arr[i-1]>=arr[i]){
                return false;
            }
        }
        if(hasPeeked){
            if(arr[i]<=arr[i+1]){
                return false
            }
        }
    }
    return hasPeeked? true:false;
};
