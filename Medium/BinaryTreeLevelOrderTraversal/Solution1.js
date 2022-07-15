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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [root,null];
    let levOrdTrans = [];
    let currLevel=[];
    while(queue.length!==0){
        let currNode = queue.shift();
        if(currNode){
          currLevel.push(currNode.val);
            if(currNode.left){
                queue.push(currNode.left);
            }
            if(currNode.right){
                queue.push(currNode.right);
            }
            if(!queue[0]){
                levOrdTrans.push(currLevel);
                currLevel= [];
                queue.push(null);
            }  
        }
    }
    return levOrdTrans;
};
