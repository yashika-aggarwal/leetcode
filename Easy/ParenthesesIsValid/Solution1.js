/**
 * @param {string} s
 * @return {boolean}
 */
map = {
    '(' : [0,')'],
    ')' : 1,
    '{' : [0,'}'],
    '}' : 1,
    '[' : [0,']'],
    ']' : 1,
}
    var isValid = function(s) {
         if(map[s[0]]==1) {
            return false;
        }
             var stack =[s[0]];
     for(i=1; i<s.length; i++) {
         if(map[s[i]]!=1) {
            stack.push(s[i]);
            }
         else {
             if (stack.length>0) {
                 if(s[i]==map[stack[stack.length-1]][1]) {
               stack.pop();
           }
                 else {
                 return false;
             }
            }
             else {
                 return false;
             }
     }
}
     if(stack.length==0) {
         return true;
         
     }
     else {
         return false;
    } 
};
