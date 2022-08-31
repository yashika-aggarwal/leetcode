/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
    let digits = "";
    let isNegative = false;
    let digit = /[0-9]/;
    let i = 0;
    let signRead = false;
    let digitRead = false;
    while(i < s.length){
        if(s[i] === '-' || s[i] === '+'){
            if(signRead || digitRead){
                break;
            }
            signRead = true;
            if(s[i] === '-'){isNegative = true;}
            i++;
        }
        else{
            if(digit.test(s[i])){
                digitRead = true;
                digits += s[i]; 
                i++;
            }
            else{
                break;
            }
        }
    }
    if(digits.length === 0){
        return 0;
    }
    return isNegative? Math.max(-parseInt(digits),-Math.pow(2,31)): Math.min(parseInt(digits),Math.pow(2,31)-1);
};
