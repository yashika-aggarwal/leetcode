/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let hashMap = new Map();
    for(let i=0;i<arr2.length;i++){
        hashMap.set(arr2[i],i);
    }
    for(let i=1;i<arr1.length;i++){
        let j =i;
        while(j>0){
            if(hashMap.has(arr1[j]) && hashMap.has(arr1[j-1])){
                if(hashMap.get(arr1[j-1])>hashMap.get(arr1[j])){
                    let num = arr1[j];
                    arr1[j]=arr1[j-1];
                    arr1[j-1]=num;
                }
            }
            else if(hashMap.has(arr1[j]) || hashMap.has(arr1[j-1])){
                if(!hashMap.has(arr1[j-1])){
                    let num = arr1[j];
                    arr1[j]=arr1[j-1];
                    arr1[j-1]=num;
                }
            }
            else{
                if(arr1[j-1]>arr1[j]){
                     let num = arr1[j];
                    arr1[j]=arr1[j-1];
                    arr1[j-1]=num;
                }
            }
            j--;
        }
    }
    return arr1;
};
