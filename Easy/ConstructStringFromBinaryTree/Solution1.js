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
 * @return {string}
 */
var tree2str = function(root) {
    let str = "";
    str+=root.val;
    if(root.left){
      let left = tree2str(root.left);
      str+= "("+left+")" ;
    }
    else if(root.right){
        str+="()";
    }
    if(root.right){
       let right = tree2str(root.right);
        str+= "("+right+")" ;
    }
    return str;
};

