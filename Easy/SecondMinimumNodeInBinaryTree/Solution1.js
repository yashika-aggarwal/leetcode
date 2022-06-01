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
var findSecondMinimumValue = function(root) {
    if(!root.left){
        return -1;
    }
    let nodes =[root];
    let min = root.val;
    let min2 =  Number.MAX_SAFE_INTEGER +1 ;
    while(nodes.length!==0){
        if(root.left){
            nodes.push(root.left);
            root = root.left;
        }
        else{
            root = nodes.pop();
            if(root.val!==min){
                min2 = Math.min(root.val,min2);
            }
            if(root.right){
                nodes.push(root.right);
            }
        }
    }
    return min2=== Number.MAX_SAFE_INTEGER +1? -1: min2;
};
