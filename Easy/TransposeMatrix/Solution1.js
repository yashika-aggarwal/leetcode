/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let trans =[];
    for(let r= 0; r<matrix.length; r++){
        for(let c =0; c<matrix[0].length; c++){
            let cell = matrix[r][c];
            if(r==0){
                trans.push([cell]);
            }
            else{
                trans[c].push(cell);
            }
        }
    }
    return trans;
};
