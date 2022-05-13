/**
 * @param {number} n
 * @return {boolean}
 */

var nums= new Set();
var isHappy = function(n) {
    if(n===1){
        return true;
    }
    let sum = 0;
    // iterate till n<10 
    while(n>=10){
        // divide n by 10 get remainder i.e. unit place digit 
        let r = n%10;
        // add the square of remainder in sum 
        sum = sum + Math.pow(r,2);
        // quotient is remaning digits in n 
        n = (n-r)/10;
    }
        n = sum + Math.pow(n,2);
    if(n===1 || n===10){
        nums.clear();
        return true;
    }
    if(nums.has(n)){
        return false;
    }
    else{
        nums.add(n);
        //else check if n isHappy if true return true 
        if(isHappy(n)){
         return true;
        }
        return false;
    }
};
