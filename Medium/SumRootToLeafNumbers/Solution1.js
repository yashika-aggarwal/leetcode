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
var sumNumbers = function(root) {
    const stack = [];
    let sum = 0;
    let curNum = '';
    while(root || stack.length !== 0){
        if(root){
            if(root.right){
                stack.push(root.right);
            }
            stack.push(root);
            curNum += root.val;
            if(!root.left && !root.right){
                sum += parseInt(curNum);
            }
            root = root.left;
        }
        else{
            root = stack.pop();
            let top = stack[stack.length - 1];
            if(top === root.right){
                stack.pop();
                stack.push(root);
                root = root.right;
            }
            else{
                curNum = curNum.slice(0,curNum.length-1);
                root = null;                
            }
        }
    }
    return sum;
};
