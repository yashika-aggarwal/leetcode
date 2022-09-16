/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const str = [];
    const text = [];
    for(let char of s){
        if(char === "#" && str.length > 0){
            str.pop();
        }
        else if(char !== "#"){
            str.push(char);
        }
    }
    for(let char of t){
        if(char === "#" && text.length > 0){
            text.pop();
        }
        else if(char !== "#"){
            text.push(char);
        }
    }
    if(str.length !== text.length){
        return false;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] !== text[i]){
            return false;
        }
    }
    return true;
};
