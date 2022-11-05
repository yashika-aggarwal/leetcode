/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let minpathSum = [];
    let m = grid.length;
    let n = grid[0].length;
    for(let r = 0; r < m; r++){
        minpathSum.push([]);
        for(let c = 0; c < n; c++){
            minpathSum[r].push(grid[r][c]);
            if(r >= 1){
                 minpathSum[r][c] =  minpathSum[r][c] + minpathSum[r-1][c];
                 if(c >= 1){
                    minpathSum[r][c] = Math.min(minpathSum[r][c], grid[r][c] + minpathSum[r][c-1]);
                }
            }
            else if(c >= 1){
                minpathSum[r][c] =  minpathSum[r][c] +  minpathSum[r][c-1];
            }
        }
    }
    return  minpathSum[m-1][n-1];
};
