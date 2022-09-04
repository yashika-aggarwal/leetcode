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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
   let vot = [];
    const nodesPos = new Map();
    let stack = [root];
    let currPos = [0,0];
    nodesPos.set(root.val,currPos);
    while(stack.length !== 0){
        if(root.left){
            currPos = [currPos[0]+1,currPos[1]-1];
            stack.push(root.left);
            root = root.left;
            nodesPos.set(root.val,currPos);
        }
        else{
            root = stack.pop();
            currPos = nodesPos.get(root.val);
            if(vot.length === 0){
                 vot.push([root.val]);
            }
            else{
                let leftCol = nodesPos.get(vot[0][0])[1];
                let colInd = currPos[1] - leftCol;
                if(currPos[1] < leftCol){
                    vot.unshift([root.val]);
                }
                else if(colInd > vot.length -1){
                    vot.push([root.val]);
                }
                else if(nodesPos.get(vot[colInd][0])[1] !== currPos[1]){
                    let i = vot.length -1;
                    while(i >= colInd){
                        vot[i+1] = vot[i];
                        i--;
                    }
                    vot[i+1] = [root.val];
                }
                else{
                    let colNodes = vot[colInd];
                    let i = colNodes.length - 1;
                    let row = nodesPos.get(colNodes[i])[0];
                   // console.log(i,row,currPos[0],colNodes[i],root.val);
                    while((i >= 0) && ((row > currPos[0]) || (row == currPos[0] && colNodes[i] > root.val))){
                        colNodes[i+1] = colNodes[i];
                        i--;
                        if( i >= 0){
                            row = nodesPos.get(colNodes[i])[0];
                        }
                    }
                    vot[colInd][i+1] = root.val;
                }
            }
            if(root.right){
                currPos = [currPos[0]+1,currPos[1]+1];
                stack.push(root.right);
                root = root.right;
                nodesPos.set(root.val,currPos);
            }
            else if(stack.length !== 0){
                stack[stack.length-1].left = null;
            }
        }
    }
    return vot;
};
