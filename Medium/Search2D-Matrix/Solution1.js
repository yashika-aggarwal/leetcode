/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0;
    let bottom = matrix.length-1;
    while(top<=bottom){
        let mRow = top + Math.floor((bottom-top)/2);
        if(matrix[mRow][0]===target){
            return true;
        }
        else if(matrix[mRow][0]>target){
            bottom = mRow-1;
        }
        else{
            let left = 1;
            let right = matrix[0].length-1;
            while(left<=right){
                let mCol = left + Math.floor((right-left)/2);
                if(matrix[mRow][mCol]===target){
                    return true;
                }
                else if(matrix[mRow][mCol]<target){
                    left = mCol +1;
                }
                else{
                    right = mCol-1;
                }
            }
            top = mRow+1;
        }
    }
    return false;
};
