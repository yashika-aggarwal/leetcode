/**
 * @param {number} n
 * @return {number}
 */
const tri = new Map();
var tribonacci = function(n) {
    if(tri.has(n)){
        return tri.get(n);
    }
    if(n<2){
        tri.set(n,n);
        return n;
    }
    if(n==2){
        tri.set(n,1);
        return 1;
    }
    let triNum = tribonacci(n-3)+tribonacci(n-2)+tribonacci(n-1);
    tri.set(n,triNum);
    return triNum;
};
