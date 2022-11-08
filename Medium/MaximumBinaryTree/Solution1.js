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
var constructMaximumBinaryTree = function(nums) {
    let maxInd = -1;
    for(let i = 0; i < nums.length; i++){
        if(maxInd === -1){
            maxInd = i;
        }
        if(nums[i] > nums[maxInd]){
            maxInd = i;
        }
    }
    let MaxBT = new TreeNode(nums[maxInd]);
    let lPrefix = nums.slice(0,maxInd);
    let rSuffix = nums.slice(maxInd+1);
    if(lPrefix.length!==0){
        MaxBT.left = constructMaximumBinaryTree(lPrefix);
    }
    if(rSuffix.length!==0){
         MaxBT.right = constructMaximumBinaryTree(rSuffix);
    }
    return MaxBT;
};
