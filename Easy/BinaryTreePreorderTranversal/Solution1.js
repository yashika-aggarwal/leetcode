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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root){
        return [];
    }
    var stack =[root];
    var output =[];
    while(stack.length!==0){
        var ele = stack.pop();
        output.push(ele.val);
        if(ele.right){
            stack.push(ele.right);
        }
        if(ele.left){
            stack.push(ele.left);
        }
    }
    return output;
};
