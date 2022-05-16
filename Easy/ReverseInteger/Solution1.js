/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // init the bool isNegative = false by default 
    let isNegative = false;
    if(x<0){
        isNegative = true;
        x = -x;
    }
    if(Math.log10(x)%1===0){
        return isNegative ? -1: 1;
    }
    // set it to true if x<0 and set x=-x
    let rInt = 0; 
    if(x>10){
         rInt =x%10 ; 
        x = (x-rInt)/10;
    }
    // while x >=10 
    while(x>=10){
        let r = x%10;
        rInt = rInt*10 +r;
        x = (x-r)/10;
    }
    // get the remaimder on dividing by 10
    // set x = (x-r)/10 
    rInt = rInt*10 +x;
    // if isNegative is true set reverse = -reverse
    if(rInt>Math.pow(2,31)-1){
        return 0;
    }
    return isNegative ? -rInt : rInt;
    // return reverse
};
