/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let moves = 0;
    let indx = 0;
    while(indx<s.length){
        if(s[indx]==='X'){
            indx+=3;
            moves++;
        }
        else{
            indx++;
        }
    }
    return moves;
};
