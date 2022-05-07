/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var s = (n >>> 0).toString(2);
    var revStr="";
    for(i=s.length-1;i>=0;i--){
        revStr+=s[i];
    }
    var zeros = 32- s.length; 
    while(zeros!==0){
        revStr+=0;
        zeros--;
    }
    return Number(parseInt(revStr,2).toString(10));
};
