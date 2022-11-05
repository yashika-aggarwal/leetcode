/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let paths = [];
    for(let r = 0; r < m; r++){
        paths.push([]);
        for(let c = 0; c < n; c++){
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
        }
    }
    return paths[m-1][n-1];
};
