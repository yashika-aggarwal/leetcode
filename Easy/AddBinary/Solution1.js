/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    var sum="";
    var currCarry ="";
    var i= a.length-1;
    var j = b.length-1;
    while(i>-1||j>-1){
        var carry = a[i]&b[j];
        var currSum = a[i]^b[j]
                sum = (currSum^currCarry)+sum;
        if(carry===1){
            currCarry = carry;
        }
        else{
            currCarry = currSum&currCarry;
        }
        i--;
        j--;
    }
    if(currCarry===1){
        sum= currCarry+sum;
    }
    return sum;
};
