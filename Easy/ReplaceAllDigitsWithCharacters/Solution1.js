/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let shiftedStr = '';
    for(let i =0;i<s.length;i++){
        if(i%2===0){
            shiftedStr+=s[i];
        }
        else{
            //console.log(s.charCodeAt(i-1)+s[i]);
            shiftedStr+=String.fromCharCode(s.charCodeAt(i-1)+parseInt(s[i]));
        }
    }
    return shiftedStr;
};
