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
 function minMax(root){
    let min = root.val;
    let max = root.val;
    if(root.left){
        const [minLeft,maxLeft] = minMax(root.left);
        min = Math.min(minLeft,min);
        max = Math.max(maxLeft,max);
    }
    if(root.right){
        const [minRight,maxRight] = minMax(root.right);
        min = Math.min(minRight,min);
        max = Math.max(maxRight,max);
    }
    return [min,max];
 }
var maxAncestorDiff = function(root) {
    let v = -1;
    if(root.left){
        const [minLeft,maxLeft] = minMax(root.left);
        v = Math.max(v,Math.abs(root.val-minLeft),Math.abs(root.val-maxLeft));
        v = Math.max(v,maxAncestorDiff(root.left));
    }
    if(root.right){
        const [minRight,maxRight] = minMax(root.right);
        v = Math.max(v,Math.abs(root.val-minRight),Math.abs(root.val-maxRight));
        v = Math.max(v,maxAncestorDiff(root.right));
    }
    return v;
};
