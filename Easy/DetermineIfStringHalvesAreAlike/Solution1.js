/**
 * @param {string} s
 * @return {boolean}
 */
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
var halvesAreAlike = function(s) {
    let mid = s.length/2;
    let netVowelCount =0;
    for(let i=0;i<mid;i++){
        if(vowels.has(s[i])){
            netVowelCount++;
        }
        if(vowels.has(s[i+mid])){
            netVowelCount--;
        }
    }
    return netVowelCount===0? true:false;
};
