/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let ops = [];
    let indx = 0;
    let currEle = 1;
    while(indx<target.length){
        if(currEle===target[indx]){
            ops.push("Push");
            indx++;
        }
        else{
            ops.push("Push","Pop");
        }
        currEle++;
    }
    return ops;
};
