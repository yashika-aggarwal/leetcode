/**
 * @param {number} n
 * @return {number}
 */
const fibonnaci ={};
var fib = function(n) {
    if(fibonnaci[n]){
        return fibonnaci[n];
    }
    if(n<2){
        fibonnaci[n]=n;
        return n;
    }
    else{
        fibonnaci[n]=fib(n-1)+fib(n-2);
        return fibonnaci[n];
    }
};
