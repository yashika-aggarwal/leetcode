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
var sumOfLeftLeaves = function(root) {
    let nodes =[root];
    let lefts = new Set();
    let sum =0;
    while(nodes.length!==0){
        root = nodes.shift();
        if(!root.left && !root.right){
            if(lefts.has(root)){
                sum = sum+ root.val;
            }
        }
        if(root.left){
            lefts.add(root.left);
            nodes.push(root.left);
        }
        if(root.right){
            nodes.push(root.right);
        }
    }
    return sum;
};
