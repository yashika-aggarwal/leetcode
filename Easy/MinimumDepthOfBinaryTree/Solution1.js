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
var minDepth = function(root) {
    if(!root){
        return 0;
    }
        var lDepth = minDepth(root.left);
        var rDepth = minDepth(root.right);
        if(lDepth !==0){
            if(lDepth<rDepth || rDepth === 0){
                return lDepth+1;
            }
            return rDepth +1;
        }
                 return rDepth +1;
};
