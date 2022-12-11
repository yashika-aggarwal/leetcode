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
function isSmaller(a,b){
    if(!b){
        return true;
    }
    for(let i = 0 ; i < a.length; i++){
        if(a.charCodeAt(i) < b.charCodeAt(i)){
            return true;
        }
        if(a.charCodeAt(i) !== b.charCodeAt(i)){
            return false;
        }
    }
    if(a.length < b.length){
        return true;
    }
    return false;
}
function reverse(str){
    let reversedStr = '';
    for(let char of str){
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}
var smallestFromLeaf = function(root) {
    const stack = [];
    let smallest = null;
    let curStr = '';
    while(root || stack.length !== 0){
        if(root){
            if(root.right){
                stack.push(root.right);
            }
            stack.push(root);
            curStr += String.fromCharCode(root.val + 97);
            if(!root.left && !root.right){
                const CurrString = reverse(curStr);
                if(!smallest || isSmaller(CurrString,smallest)){
                    smallest = CurrString;
                }
            }
            root = root.left;
        }
        else{
            root = stack.pop();
            let top = stack[stack.length - 1];
            if(top === root.right){
                stack.pop();
                stack.push(root);
                root = root.right;
            }
            else{
                curStr = curStr.slice(0,curStr.length-1);
                root = null;                
            }
        }
    }
    return smallest;
};
