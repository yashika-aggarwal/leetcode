/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let paths = [];
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    for(let r = 0; r < rows; r++){
        paths.push([]);
        for(let c = 0; c < cols; c++){
            if(r === 0 && c === 0){
                paths[r].push(1);
            }
            else{
                paths[r].push(0);
            }
            if(c >= 1){
                paths[r][c] = paths[r][c-1];
            }
            if(r >= 1){
                 paths[r][c] =  paths[r][c] + paths[r-1][c];
            }
            if(obstacleGrid[r][c] === 1){
                paths[r][c] = 0;
            }
        }
    }
    return paths[rows-1][cols-1];
};
