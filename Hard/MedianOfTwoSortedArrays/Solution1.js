/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = Math.round((nums1.length + nums2.length)/2)+1;
    const mergedArr = [];
    let ind1 = 0;
    let ind2 = 0;
    while(mergedArr.length < len){
        if(nums2[ind2] === undefined || nums1[ind1]<=nums2[ind2]){
            mergedArr.push(nums1[ind1]);
            ind1++;
        }
        else{
            mergedArr.push(nums2[ind2]);
            ind2++;
        }
    }
    return (nums1.length + nums2.length)%2 === 0 ? (mergedArr[mergedArr.length-1]+mergedArr[mergedArr.length-2])/2 : mergedArr[mergedArr.length-2];
};
