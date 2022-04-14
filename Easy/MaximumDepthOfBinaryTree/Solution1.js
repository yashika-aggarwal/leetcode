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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    else{
            var lDepth= maxDepth(root.left);
            var rDepth = maxDepth(root.right);
        if(lDepth>rDepth){
         return lDepth +1;
         }
        else{
           return rDepth+1;
        }
    }
};
