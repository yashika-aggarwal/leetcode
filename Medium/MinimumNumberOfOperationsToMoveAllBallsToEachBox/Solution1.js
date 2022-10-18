/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let ans = new Array(boxes.length).fill(0);
    for(let i = 0; i < boxes.length; i++){
        for(let j = 0; j < boxes.length; j++){
            if(boxes[j] === '1'){
                ans[i] = ans[i] + Math.abs(i-j);
            }
        }
    }
    return ans;
};
