/**
 * @param {string[]} strs
 * @return {string}
 */
function smalleststr(a,b) {
    return a.length<=b.length? a:b;
}
function isCommonPrefix(list_of_strings, length) {
    str1 = list_of_strings[0].substring(0,length);
     for(j=1; j<list_of_strings.length;j++) {
       if(!list_of_strings[j].startsWith(str1)) {
           return false;
       }
     }
    return true;
}
var longestCommonPrefix = function(strs)  {
    var smalleststring=strs.reduce(smalleststr);
    var l=0;
    var h=smalleststring.length;
    while (l<=h) {
        var middle=~~((l+h)/2);
        if (isCommonPrefix(strs,middle)) {
            l = middle +1;
        }
        else {
            h = middle -1;
        }
    }
return strs[0].substring(0,~~((l+h)/2));
    
    
};
