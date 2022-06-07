/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 =0;
    let pointer2 = m;
        while(pointer2<m+n){
            let len =0;
            while(nums1[pointer2-1]>nums2[pointer1]){
                nums1[pointer2]=nums1[pointer2-1];
                pointer2--;
                len++;
            }
            nums1[pointer2]= nums2[pointer1];
            pointer2+=len+1;
            pointer1++;
        }  
    return nums1;
};
