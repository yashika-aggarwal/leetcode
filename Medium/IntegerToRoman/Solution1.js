/**
 * @param {number} num
 * @return {string}
 */
const roman = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"]]);
function getRoman(digit,pow){
    let romanDigit = '';
    if(digit === 4 || digit === 9){
        if(digit === 4){
            romanDigit = roman.get(Math.pow(10,pow)) + roman.get((digit+1)*Math.pow(10,pow));
        }
        else{
            romanDigit = roman.get(Math.pow(10,pow)) + roman.get(Math.pow(10,pow+1));
        }
    }
    else{
        if(digit >= 5){
            romanDigit = roman.get(5*Math.pow(10,pow));
            digit-=5;
        }
        while(digit > 0){
            romanDigit += roman.get(Math.pow(10,pow));
            digit--;
        }
    }
    return romanDigit;
}
var intToRoman = function(num) {
    let pow = 0;
    let romanNum = '';
    while(num >= 10){
        let digit = num % 10;
        num = (num-digit)/10;
        romanNum = getRoman(digit,pow) + romanNum;
        pow++;
    }
    romanNum =  getRoman(num,pow) + romanNum;
    return romanNum;
};
