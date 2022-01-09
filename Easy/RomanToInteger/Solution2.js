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
    for(i=0; i<s.length-1; i++) {
     var current_digit=map[s[i]];
     var next_digit = map[s[i+1]];
     
     if(current_digit>=next_digit){
      sum=sum+next_digit;
     }
       
    else {
         sum=sum-2*current_digit+next_digit;   
        }
    }
    return sum;
        
};
