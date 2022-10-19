/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let count1 = 1;
    let count2 = 0;
    for(let i = 1; i < s.length; i++){
        if(s[i] === ')'){
            count2++;
            if(count1 === count2){
                i = i + 1;
                count2 = 0;
                count1 = 1;
                continue;
            }
        }
        else{
            count1++;
        }
        stack.push(s[i]);
    }
    return stack.join('');
};
