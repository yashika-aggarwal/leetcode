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
var isSymmetric = function(root) {
     var leftSubTree = root.left;
     var rightSubTree = root.right;
        var lQueue = [];
    if(leftSubTree){
        lQueue.push(leftSubTree);
    }
        var rQueue = [];
    if(rightSubTree){
        rQueue.push(rightSubTree);
    }
    if(rQueue.length===0 && lQueue.length===0){
        return true;
    }
    else if(rQueue.length===0 || lQueue.length===0){
        return false;
    }
    while(rQueue.length!==0 && lQueue.length!==0){
        var rNode = rQueue.shift();
        var lNode = lQueue.shift();
        if(rNode.val !== lNode.val ){
            return false;
            break;
        }
        if(rNode.right && lNode.left){
            rQueue.push(rNode.right);
            lQueue.push(lNode.left);
        }
        if(rNode.left && lNode.right){
            rQueue.push(rNode.left);
            lQueue.push(lNode.right);
        }
        if((!rNode.right && lNode.left) || (!lNode.left && rNode.right) || (!rNode.left && lNode.right) || (!lNode.right && rNode.left)){
            return false;
        } 
    }
    return true;
    
};
