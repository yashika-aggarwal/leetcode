/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var midIndx = Math.floor(nums.length/2);
    var bst = new TreeNode(nums[midIndx]);
    var lSubArr = nums.slice(0,midIndx);
    var rSubArr = nums.slice(midIndx+1);
    if(lSubArr.length!==0){
        bst.left = sortedArrayToBST(lSubArr);
    }
    if(rSubArr.length!==0){
         bst.right = sortedArrayToBST(rSubArr);
    }
    return bst;
};
