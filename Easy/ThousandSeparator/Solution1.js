/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let nStr = "";
    while(n>=1000){
        let digits = n%1000;
        if(digits<100){
            digits= "0"+digits;
        }
        if(digits<10){
            digits= "0"+digits;
        }
        nStr = "."+digits+ nStr;
        n = (n-digits)/1000;
    }
    return n+nStr;
};
