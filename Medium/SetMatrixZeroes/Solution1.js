/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    for(let r=0; r<rows; r++){
	for(let c=0; c<cols; c++){
	    let cell = matrix[r][c];
	    if(cell===0){
	    let currRow = r-1;
	    	while(currRow>=0){	
	    	   if(matrix[currRow][c]!==0){
	    	      matrix[currRow][c] = Number.MIN_SAFE_INTEGER;
	    	   }
	    	   currRow--;
	    	}
	    currRow = r+1;
		while(currRow<rows){	
		    if(matrix[currRow][c]!==0){
	    	      matrix[currRow][c] = Number.MIN_SAFE_INTEGER;
	    	   }
	    	   currRow++;
	    	}
	    // all the columns before the currCol from the currRow
	    	for(let j = 0; j<cols; j++){
		    if(matrix[r][j]!==0){
	    	       matrix[r][j] = Number.MIN_SAFE_INTEGER;
	    	    }
	    	}
	    }
	}
    }
    	for(let r=0; r<rows; r++){
	    for(let c=0; c<cols; c++){
	        let cell = matrix[r][c];
	        if(cell===Number.MIN_SAFE_INTEGER){
	    	    matrix[r][c]=0;
	       }
	    }
	}
	return matrix;	
};
