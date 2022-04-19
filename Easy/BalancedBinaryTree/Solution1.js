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

function height(root) {
    if(!root){
        return 0;
    }
    var lDepth = height(root.left);
    var rDepth = height(root.right);
    if(lDepth>rDepth){
        return lDepth +1;
    }
    else{
        return rDepth +1;
    }
}

var isBalanced = function(root) {
    if(!root){
        return true;
    }
    var lSubTree = root.left;
    var rSubTree = root.right;
    var lDepth = height(lSubTree);
    var rDepth = height(rSubTree);
    if(lDepth > rDepth){
        if(lDepth -rDepth >1){
            return false;
        }
    }
    else if(rDepth > lDepth){
        if(rDepth - lDepth >1){
            return false;
        }
    }
    if(isBalanced(lSubTree) && isBalanced(rSubTree)){
                return true;
    }
    else{
        return false;
    }
};
