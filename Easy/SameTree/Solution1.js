/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && q) {
        return false; 
    }
    else if(!q && p){
        return false;
    }
    else if(!p&& !q) {
        return true;
    }
    else {
        if(p.val !== q.val) {
            return false;
        }
        var left = isSameTree(p.left,q.left);
        if(left === false){
            return false;
        }
        var right = isSameTree(p.right,q.right);
         if(right===false){
             return false;
          }
            return true;
    }
};
