/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    for(let r = 0; r<rows; r++){
        for(let c =r;c<cols; c++){
            let cell = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = cell;
        }
    }
   for(let row=0; row<rows;row++){
        for(let col=0;col<cols/2; col++){
            let cell= matrix[row][col];
            matrix[row][col] = matrix[row][rows-1-col];
            matrix[row][rows-1-col] = cell;
        }
   }
    return matrix;
};
