/**
 * @param {string[]} words
 * @return {string}
 */
function isPalindrome(s){
    let p1 = 0; 
    let p2 = s.length - 1;
    while(p1 < p2){
        if(s[p1] !== s[p2]){
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}
var firstPalindrome = function(words) {
    for(let word of words){
        if(isPalindrome(word)){
            return word;
        }
    }
    return '';
};
