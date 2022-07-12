/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let prefix = "";
    let gcd = prefix;
    for(let char of str1){
        prefix +=char;
        if(divides(prefix,str1)&&divides(prefix,str2)){
            gcd = prefix;
        }
    }
    return gcd;
};
function divides(prefix,str){
    for(let i=0;i<str.length;i+=prefix.length){
        if(str.substr(i,prefix.length)!==prefix){
            return false;
        }
    }
    return true;
}
