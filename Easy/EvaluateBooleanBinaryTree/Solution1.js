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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if(!root.left && !root.right){
        return root.val !== 0 ; 
    }
    let eval;
    if(root.val === 2){
         eval = evaluateTree(root.left) || evaluateTree(root.right);
    }
    else{
        eval = evaluateTree(root.left) && evaluateTree(root.right);
    }
    return eval;
};
