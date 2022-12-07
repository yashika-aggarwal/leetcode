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
 */
var BSTIterator = function(root) {
    this.stack = [];
    let curNode = root;
    while(curNode){
        this.stack.push(curNode);
        curNode = curNode.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let curNode = this.stack.pop();
    const curNum = curNode.val;
    if(curNode.right){
        curNode = curNode.right;
        this.stack.push(curNode);
        while(curNode.left){
            curNode = curNode.left;
            this.stack.push(curNode);
        }
    }
    return curNum;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.stack.length < 1){
        return false;
    }
    return true;
    return true;
    const top = this.stack[this.stack.length - 1];
    return top.right? true:false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
