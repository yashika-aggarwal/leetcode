/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums = new Set(nums1);
    let intersect = new Set();
    let ans =[];
    for(let i =0; i<nums2.length; i++){
        if(nums.has(nums2[i]) && !intersect.has(nums2[i])){
            intersect.add(nums2[i]);
            ans.push(nums2[i]);
        }
    }
    return ans;
};
