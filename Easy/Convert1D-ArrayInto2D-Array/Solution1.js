/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length!==m*n){
        return [];
    }
    let Arry=[];
    let currRow= 0;
    let currCol = 0;
    Arry.push([]);
    for(let num of original){
        if(currCol<n){
            Arry[currRow][currCol]=(num);
            currCol++;
        }
        if(currCol===n && currRow<m-1){
            currCol=0;
            currRow++;
            Arry.push([]);
        }
    }
    return Arry;
};
