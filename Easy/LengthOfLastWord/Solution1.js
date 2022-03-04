/**
 * @param {string} s
 * @return {number}
 */
 function checkLastElement(word){
     if(word !== " "){
          return word;
     }
}
var lengthOfLastWord = function(s) {
    var lastword = s.split(" ").reverse().find(checkLastElement);
    return lastword.length;
};
