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
function binaryTreePaths(root){
    let path = "" + root.val;
    if(!root.left&&!root.right){
        return [path];
    }
    let paths =[];
    if(root.left){
        let left = binaryTreePaths(root.left);
        left.forEach((value)=>{
            path +=value;
            paths.push(path);
            path = "" +root.val;
        })
    }
    if(root.right){
        let right = binaryTreePaths(root.right);
        right.forEach((value)=>{
            path += value;
            paths.push(path);
            path = "" +root.val;
        })
    }
        return paths;
}
var sumRootToLeaf = function(root) {
    let sum = 0;
    let paths = binaryTreePaths(root);
    paths.forEach((value)=>{
        sum+=parseInt(parseInt(value, 2).toString(10));
    });
    return sum;
};
