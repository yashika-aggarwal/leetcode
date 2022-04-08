/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 0;
    var u = x;
    while(l<=u){
        var m = Math.floor((l+u)/2);
        if(l===u){
            if(m*m > x ){
                return m-1;
            }
                return m;
        }
        else{
            if(m*m < x){
                l = m +1;    
                if(l*l > x){
                 return m;
                }
            }
            else if(m*m >x){
                u = m-1;
            }
            else {
                return m;
            }
        }
    }
};