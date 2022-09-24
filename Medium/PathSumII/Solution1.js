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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let paths = [];
    const stack =[];
    let currPath = [];
    let currSum = 0;
    while(root || stack.length!==0){
        if(root){
            if(root.right){
                stack.push(root.right);
            }
            stack.push(root);
            currSum += root.val;
            currPath.push(root.val);
            if(currSum === targetSum && !root.left && !root.right){
                let path = [...currPath]
                paths.push(path);
            }
            root = root.left;   
        }
        else{
            root = stack.pop();
            let top = stack[stack.length-1];
            if(top === root.right){
                stack.pop();
                stack.push(root);
                root = root.right;
            }
            else{
                currSum -= root.val;
                currPath.pop();
                root = null;
            }
        }
    }
    return paths;
};
