/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let digits = [];
    while(num>=10){
        let r = num%10;
        digits.unshift(r);
        num=(num-r)/10;
    }
    digits.unshift(num);
    let max = 0;
    let isChanged = false;
    for(let digit of digits){
        if(digit===6 && !isChanged){
            max=max*10+9;
            isChanged=true;
        }
        else{
            max = max*10+digit;
        }
    }
    return max;
};
