/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let p1 = 0;
    let p2 = s.length-1;
    let alphabet = /[A-Z]|[a-z]/;
    let reverse = "";
    while(p1<s.length){
        let char1 = s[p1];
        let char2 = s[p2];
        if(alphabet.test(char1) && alphabet.test(char2)){
            reverse+=s[p2];
            p2--;
            p1++;
        }
        if(!alphabet.test(char1)){
            reverse+=s[p1];
            p1++;
        }
        if(!alphabet.test(char2)){
            p2--;
        }
    }
    return reverse;
};
