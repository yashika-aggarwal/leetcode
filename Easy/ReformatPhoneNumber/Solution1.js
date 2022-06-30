/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let nonDigits = new RegExp(/[^0-9]/,"g");
    number = number.replaceAll(nonDigits,"");
    let reStr = "";
    let indx =0;
    let len =3;
    while(indx<number.length){
        let currLen = number.length-indx;
        if(currLen===4 || currLen===2){
            len =2;
        }
        reStr +=number.substr(indx,len);
        indx+=len;
        if(indx<number.length){
            reStr+="-"
        }
    }
    return reStr;
};
