/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var dict={
    0:[1],
    1:[1,1]
};
var getRow = function(rowIndex) {
    if(dict[rowIndex]){
        return dict[rowIndex];
    }
    else{
        var upperRow = getRow(rowIndex-1);
         var indexedRow =  [1];
         var indx = 0;
         while(upperRow[indx+1]){
        indexedRow.push(upperRow[indx]+upperRow[indx+1]);
             indx++;
         }
         indexedRow.push(1);
         dict[rowIndex]=indexedRow;
         return dict[rowIndex];
    }
};
