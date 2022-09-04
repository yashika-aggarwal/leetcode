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
 * @return {boolean}
 */
function FindMaxMin(root){
    let min = root.val;
    let max = min;
    if(root.left){
        let [lMax,lMin] = FindMaxMin(root.left);
        min = Math.min(lMin,min);
        max = Math.max(lMax,max);
    }
    if(root.right){
        let [lMax,lMin] = FindMaxMin(root.right);
        min = Math.min(lMin,min);
        max = Math.max(lMax,max);
    }
    return [max,min];
}

var isValidBST = function(root) {
   if(!root){
       return true;
   }
   if(root.left){
       let max = FindMaxMin(root.left)[0];
       if(root.val <= max || !isValidBST(root.left)){
           console.log("Here");
           return false;
       }
   }
    if(root.right){
       let min = FindMaxMin(root.right)[1];
       if(root.val >= min || !isValidBST(root.right)){
           return false;
       }
   }
    return true;
};
