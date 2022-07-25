/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let lRow = 0;
    let hRow = matrix.length-1;
    while(lRow<=hRow){
        let midRow = lRow + Math.floor((hRow-lRow)/2);
        if(matrix[midRow][0]===target){
            return true;
        }
        else if(matrix[midRow][0]>target){
            hRow = midRow-1;
        }
        else{
            let lCol = 1;
            let hCol = matrix[lRow].length-1;
            while(lCol<=hCol){
                let midCol = lCol + Math.floor((hCol-lCol)/2);
                //console.log(hRow,lCol,midCol);
                let cell = matrix[lRow][midCol];
                if(cell===target){
                    return true;
                }
                else if(cell<target){
                    lCol = midCol+1;
                }
                else{
                    hCol = midCol-1;
                   // console.log("hCol",hCol);
                }
            }
            lRow++;
        }
    }
    return false; 
};
