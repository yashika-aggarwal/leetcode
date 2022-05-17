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
     let nodes = [cloned];
     while(nodes.length!==0){
         let currNode =nodes.shift();
       //  console.log(currNode);
         if(currNode.val===target.val){
             return currNode;
         }
         if(currNode.left){
             nodes.push(currNode.left);
         }
         if(currNode.right){
             nodes.push(currNode.right);
         }
     }
};
