/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    // iterate over both trees 
    let nodes =[cloned];
    let currNode = cloned
    while(nodes.length!==0){
        if(currNode.left){
            nodes.push(currNode.left);
            currNode = currNode.left;
        }
        else{
            currNode = nodes.pop();
            console.log(currNode)
            if(currNode.val===target.val){
                return currNode;
            }
            if(currNode.right){
                nodes.push(currNode.right);
                currNode = currNode.right;
            }
        }
    }
};
