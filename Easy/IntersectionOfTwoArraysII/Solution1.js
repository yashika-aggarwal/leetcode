/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums = new Map();
    let common = [];
    for(let num of nums1){
        if(nums.has(num)){
            let count =  nums.get(num)+1;
            nums.set(num,count)
        }
        else{
            nums.set(num,1);
        }
    }
    for(let num of nums2){
        if(nums.has(num)){
            let count = nums.get(num)-1;
            common.push(num);
            if(count===0){
                 nums.delete(num);
            }
            else{
                nums.set(num,count);
            }
        }
    }
    return common;
};
