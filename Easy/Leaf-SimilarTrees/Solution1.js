/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafs(root){
    if(!root){
        return [];
    }
    const stack=[root]; 
    const iot =[]
    while(stack.length!==0) {
        if(root.left){
            root = root.left 
            stack.push(root);
        }
        else{
            let ele = stack.pop();
            if(!ele.left && !ele.right){
                iot.push(ele.val);
            }
            if(ele.right) {
                root = ele.right;
                stack.push(root); 
            } 
        } 
    }
    return iot;
}
var leafSimilar = function(root1, root2) {
    const leaf1 = leafs(root1);
    const leaf2 = leafs(root2);
    if(leaf1.length !== leaf2.length){
        return false;
    }
    for(let i = 0; i < leaf1.length; i++){
        if(leaf1[i] !== leaf2[i]){
            return false;
        }
    }
    return true;
};
