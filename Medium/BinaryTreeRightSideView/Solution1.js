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
var rightSideView = function(root) {
    if(!root){
        return []
    }
    let rights=[];
    let queue = [root,null];
    while(queue.length!==0){
        let currNode = queue.shift();
        if(currNode){
            if(currNode.left){
                queue.push(currNode.left);
            }
            if(currNode.right){
                queue.push(currNode.right);
            }
            if(queue[0]===null){
                rights.push(currNode.val);
                queue.push(null);
            }
        }
    }
    return rights;
};
