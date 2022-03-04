/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i=digits.length -1;
    while(digits[i]==9){
     digits[i] = 0;
      if(i==0){
          digits.unshift(1);
      }
        i--; 
    }
    digits[i] = digits[i] +1;
    return digits;
};
