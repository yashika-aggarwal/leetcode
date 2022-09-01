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
var goodNodes = function(root) {
    let stack = [[root,root.val]];
    let goodNodes = 0;
    while(stack.length !== 0){
        if(root.left){
            let currMax = stack[stack.length-1][1];
            currMax = Math.max(currMax,root.left.val);
            stack.push([root.left,currMax]);
            root = root.left;
        }
        else{
            let popped = stack.pop();
            root = popped[0]
            let currMax = popped[1];
            if(currMax <= root.val){
                goodNodes++;
            }
            if(root.right){
                 currMax = Math.max(currMax,root.right.val);
                 stack.push([root.right,currMax]);
                root = root.right;
            }
            else{
                root.left = null;
            }
        }
    }
    return goodNodes;
};
