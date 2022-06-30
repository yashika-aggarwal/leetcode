/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let currDepth = 0;
    for(let char of s){
        if(char==="("){
            currDepth++;
            depth = Math.max(depth,currDepth);
        }
        else if(char ===")"){
            currDepth--;
        }
    }
    return depth;
};
