/**
 * @param {number} numRows
 * @return {number[][]}
 */
var dict={};

var generate = function(numRows) {
    if(dict[numRows]){
        return dict[numRows];
    } 
    else{
        if(numRows===1){
            dict[numRows] = [[1]];
            return dict[numRows];
        }
        else if(numRows===2){
            dict[numRows]=[[1],[1,1]];
            return dict[numRows];
        }
        else{
            var topArr = generate(numRows-1);
            var lArr = topArr[topArr.length-1];
            var newArr = [1];
            var indx=0;
            while(lArr[indx+1]){
                newArr.push(lArr[indx]+lArr[indx+1]);
                indx++;
            }
            newArr.push(1);
            dict[numRows]= [...topArr,newArr];
            return dict[numRows];
        }
    }
};
