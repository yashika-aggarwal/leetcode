/**
 * @param {number} n
 * @return {number}
 */

var dict = {};

var climbStairs = function(n){
    if(dict[n]){
        return dict[n];
    } 
    else{
        if(n<=2){
            dict[n] = n;
            return n;
        }
        dict[n] = climbStairs(n-1) + climbStairs(n-2);
        return dict[n];
    }
};