/**
 * @param {string} s
 * @return {number}
 */
map = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}

var romanToInt = function(s) {
    var sum=map[s[0]];
    for(i=1; i<s.length; i++) {
     var current_digit=map[s[i]];
     var previous_digit = map[s[i-1]];
     
     if(previous_digit>=current_digit){
         sum=current_digit+sum;
     }
    else {
         sum=sum-2*previous_digit+current_digit;   
        }
    }
    return sum;
        
};
