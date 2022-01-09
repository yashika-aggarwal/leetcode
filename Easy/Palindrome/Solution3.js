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
        var list_of_digits=[];
        var reverse =[];
        while (x>=10) {
            remainder=x%10;
            list_of_digits.push(remainder);
            x=~~(x/10);
             }
        list_of_digits.push(x);
        for (var i = list_of_digits.length -1; i>=0; i--)
        {
            reverse.push(list_of_digits[i]);
        }
        for (var i=0; i<reverse.length; i++)
        {
            if(list_of_digits[i] != reverse[i])
            {
                return false;
            } 
        }      
        return true;
    }
    
    
};
