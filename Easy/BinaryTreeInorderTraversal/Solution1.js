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

var inorderTraversal = function(root) {
    if(!root){
        return [];
    }
    var stack=[]; 
    var output =[]
    stack.push(root);
    while(stack.length!==0) {
        if(root.left){
            root = root.left 
            stack.push(root);
        }
           else{
              var ele = stack.pop();
            output.push(ele.val);
            if(ele.right) {
              root = ele.right;
              stack.push(root); 
            } 
           } 
    }
    return output;
  
};
