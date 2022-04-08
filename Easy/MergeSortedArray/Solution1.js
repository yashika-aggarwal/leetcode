/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var pointer_1 =0;
    var pointer_2 = m;
    for(index=0;index<n;index++){
        var ele = nums2[index];
        while(pointer_1<pointer_2){
            ele = nums2[index];
            if(nums1[pointer_1]>ele){
                nums1[pointer_2]=nums1[pointer_1];
                nums1[pointer_1]=ele;
                pointer_2++;
                pointer_1++;
                index++;
            }
           else{
               pointer_1++;
           } 
        }
        if(nums2[index]){
        ele = nums2[index];
        nums1[pointer_2]=ele;
        pointer_2++;
        }
    }
       return nums1.sort(function(a, b){return a - b});
};