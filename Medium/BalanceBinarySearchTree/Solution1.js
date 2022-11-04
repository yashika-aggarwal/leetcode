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
 * @return {TreeNode}
 */
function sortedArrayToBST(nums){
    let midIndx = Math.floor(nums.length/2);
    let balancedBST = new TreeNode(nums[midIndx]);
    let lSubArr = nums.slice(0,midIndx);
    let rSubArr = nums.slice(midIndx+1);
    if(lSubArr.length!==0){
        balancedBST.left = sortedArrayToBST(lSubArr);
    }
    if(rSubArr.length!==0){
         balancedBST.right = sortedArrayToBST(rSubArr);
    }
    return balancedBST;
}
var balanceBST = function(root) {
    const inorder = [];
    const stack = [root];
    while(stack.length!==0){
        if(root.left){
            root = root.left;
            stack.push(root);
        }
        else{
            root = stack.pop();
            inorder.push(root.val);
            if(root.right){
                root = root.right;
                stack.push(root);
            }
            else if(stack.length!==0){
                stack[stack.length-1].left = null;
            }
        }
    }
    return sortedArrayToBST(inorder);
};
