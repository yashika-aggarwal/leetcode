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
var postorderTraversal = function(root) {
    var output =[];
    if(!root){
        return output;
    }
    var stack =[];
    while(root || stack.length!==0){
        if(root){
            if(root.right){
             stack.push(root.right);
         }
            stack.push(root);
            root = root.left;   
        }
        else{
            root = stack.pop();
            var top = stack[stack.length-1];
            if(top === root.right){
                stack.pop();
                stack.push(root);
                root = root.right;
            }
            else{
                output.push(root.val);
                root = null;
            }
        }
    }
    return output;
};
