/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    const zigZag = [];
    let row = numRows-2;
    let zig = false;
    for(let indx = 0; indx < s.length; indx++){
          if(indx < numRows){
              zigZag.push(["" + s[indx]]);
          }
          else{
              zigZag[row] += s[indx];
              if(zig){
                  row++;
              }
              else{
                  row--;
              }
              if(row === numRows){
                row = numRows - 2;
                zig = false;
              }
              else if(row < 0){
                 row = 1;
                 zig = true;
              }
          }
    }
    let zigStr = "";
    for(let row of zigZag){
        zigStr += row;
    }
    return zigStr;
};
