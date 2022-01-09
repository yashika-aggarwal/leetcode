/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
   if (x<0) {
        return false;
    } else if (x<10) {
        return true;
    } else {
        var list_of_digits=[];
        var sum=0;
        var divident = x;
        while (divident>=10) {
            remainder=divident%10;
            list_of_digits.push(remainder);
            divident=~~(divident/10);
             }
        list_of_digits.push(divident);
        for (var i=0; i<list_of_digits.length; i++){
            power = list_of_digits.length - i - 1;
            sum += list_of_digits[i]*Math.pow(10, power);
        }
        if (sum == x) {
            return true;
        }
        else {
            return false;
        }
    }
};
