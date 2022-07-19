/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0;
    while(n>=k){
        let digit = n%k;
        n=(n-digit)/k;
        sum+=digit;
    }
    sum+=n;
    return sum;
};
