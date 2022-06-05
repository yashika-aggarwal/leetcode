/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root.val ===p.val || root.val ===q.val){
        return root;
    }
    else if((p.val<=root.val && q.val>=root.val)||(p.val>root.val && q.val<root.val)){
         return root;
    }
    if(root.right){
        let right = lowestCommonAncestor(root.right,p,q);
        if(right){
            return right;
        }
    }
    if(root.left){
        let left =  lowestCommonAncestor(root.left,p,q);
        if(left){
            return left;
        }
    }
};
