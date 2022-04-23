/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // get the root val and subtract from the target sum to calcutate remaining sum
    if(!root){
        return false;
    }
    var remainSum = targetSum - root.val;  
    // if the root is a leafnode and the remaining sum is zero return true
    if(root.left===null && root.right===null){
        if(remainSum ===0){
                 return true;
        }
    }
        // call the function again with each child of the subtree and remaining sum 
    else{
        if(hasPathSum(root.left,remainSum) || hasPathSum(root.right,remainSum)){
        return true;
        }
    }
    return false;
    // else return false
};
