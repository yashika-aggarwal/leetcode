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
var deepestLeavesSum = function(root) {
    const queue = [root,null];
    let leaveSum = 0;
    while(queue.length !== 0){
        root = queue.shift();
        if(!root.left && !root.right){
            leaveSum += root.val;
        }
        if(root.left){
            queue.push(root.left);
        }
        if(root.right){
            queue.push(root.right);
        }
        if(!queue[0]){
            queue.shift();
            if(queue.length !== 0){
                queue.push(null);
                leaveSum = 0;
            }
        }
    }
    return leaveSum;
};
