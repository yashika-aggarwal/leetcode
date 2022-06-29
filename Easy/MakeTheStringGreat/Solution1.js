/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let goodStr = '';
    for(let i =0;i<s.length;i++){
        let isLowerCase = false;
        if(s[i].toLowerCase() ===s[i]){
            isLowerCase = true;
        }
        if((!isLowerCase && s[i].toLowerCase() ===s[i+1]) || (isLowerCase && s[i].toUpperCase()===s[i+1])){
            i++;
        }
        else{
             goodStr+=s[i];
        }
    }
    return goodStr.length===s.length? goodStr: makeGood(goodStr);
};

