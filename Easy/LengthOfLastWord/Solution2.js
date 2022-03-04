/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str = s;
    while(str.endsWith(" ")===true){
         str = str.slice(0,str.length-1);
    }
    var lastWordindex = str.lastIndexOf(" ")+1;
    return str.length-lastWordindex;
};
