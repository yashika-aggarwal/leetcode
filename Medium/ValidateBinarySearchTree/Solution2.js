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
var isValidBST = function(root) {
   if(!root){
       return true;
   }
   const stack = [root];
    let prev = - Math.pow(2,31) - 1 ; 
    while(stack.length !== 0){
       if(root.left){
          stack.push(root.left);
           root = root.left;
       }
       else{
           root = stack.pop();
           if(prev >= root.val){
               return false;
           }
           else{
               prev = root.val;
           }
           if(root.right){
               stack.push(root.right);
               root = root.right;
           }
           else if(stack.length !== 0){
               stack[stack.length-1].left = null;
           }
       } 
    }
    return true;
};
