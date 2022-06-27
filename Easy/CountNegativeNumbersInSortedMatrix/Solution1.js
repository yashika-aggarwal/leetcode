/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let cols = grid[0].length;
    let rows = grid.length;
    let count= 0;
   for(let r = 0;r<rows;r++){
        if(grid[r][0]<0){
            count += (rows-r)*(cols);
            break;
        }
        else{
           let left = 0;
           let right = cols-1;
           while(left<=right){
                let middle = left+Math.floor((right-left)/2);
                if(grid[r][middle]<0){
                    count+=(right-middle+1);
                    right = middle-1;
                }
                else{
                    left = middle+1;
                }
            }
        }
    }
    return count;
};
