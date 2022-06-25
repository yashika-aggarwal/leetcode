/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while(n>=10){
        let digit = n%10;
        product*=digit;
        sum+=digit;
        n = (n-digit)/10;
    }
    product*=n;
    sum+=n;
    return product-sum;
};
