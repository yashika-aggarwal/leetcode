/**
 * @param {string} s
 * @return {string}
 */
const vowels = new Set("aeiouAEIOU");
var reverseVowels = function(s) {
    let p1 =0; 
    let p2 = s.length-1;
    let str ="";
    while(p1<s.length){
        if(vowels.has(s[p1])){
            if(vowels.has(s[p2])){
                str +=s[p2];
                 p1++;
                 p2--;
            }
            else{
                p2--;
            }
        }
        else{
            str+=s[p1];
            p1++;
        }
    }
    return str;
};
