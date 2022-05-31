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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const r = new Set();
    let queue = [root];
    while(queue.length!==0){
        root = queue.shift();
        let remainder = k-root.val;
        if(r.has(remainder) || r.has(root.val)){
            return true;
        }
        else{
            r.add(remainder);
        }
        if(root.left){
            queue.push(root.left);
        }
        if(root.right){
            queue.push(root.right);
        }
    }
    return false;
};
