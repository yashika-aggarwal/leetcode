/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let queue = [root,null];
    let lot = [];
    let currLevel = [];
    while(queue.length !== 0){
        //console.log(queue);
        root = queue.shift();
        currLevel.push(root.val);
        if(root.children){
            for(let child of root.children){
                queue.push(child);    
            }
        }
        if(!queue[0]){
            queue.shift();
            lot.push(currLevel);
            if(queue.length === 0){
                break;
            }
            queue.push(null);
            currLevel = [];
        }
    }
    return lot;
};
