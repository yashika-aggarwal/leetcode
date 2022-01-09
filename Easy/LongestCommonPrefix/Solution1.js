/**
 * @param {string[]} strs
 * @return {string}
 */
function smalleststr(a,b) {
    return a.length<=b.length? a:b;
}
var longestCommonPrefix = function(strs)  {
    var smalleststring=strs.reduce(smalleststr);
    var prefix ="";
    for (i=0; i<smalleststring.length; i++) {
        for(j=0; j<strs.length;j++) {
           current_char = strs[j][i];
           char= smalleststring[i];
          if(char!=current_char) {
              return prefix;  
          }
        } 
        prefix= prefix.concat(current_char); 
    }
     return prefix;
};
