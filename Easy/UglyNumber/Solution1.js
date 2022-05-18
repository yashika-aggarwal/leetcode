/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<=0){
        return false;
    }
    else if(n===1){
        return true;
    }
    while(n%2===0|| n%3===0 ||n%5===0){
        if(n%2===0){
            n = n/2;
        }
        if(n%5===0){
            n = n/5;
        }
        if(n%3===0){
            n = n/3;
        }
    }
    return n>1? false: true;
};
