/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {
        return false;
    } else if (x<10) {
        return true;
    } else if(x==10) {
        return false;
    } else {
        var reverse = 0;
        var divident = x;
        while (divident>=10) {
            remainder=divident%10;
            reverse = reverse*10 + remainder;
            divident=~~(divident/10);
             }
        reverse = reverse*10 + divident;
        if (reverse == x) {
            return true;
        } else {
            return false;
        }
    }
    
};
