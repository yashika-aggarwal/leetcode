/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const palindrome = new Set();
    let lps = s[0];
    for(let i = 0; i < s.length; i++){
        let j = 0;
        while(j < i){
            if(s[j] === s[i]){
               let currSubStr = s.substring(j+1,i);
                if(currSubStr.length < 2 || palindrome.has(currSubStr)){
                    let pStr = s[j]+currSubStr+s[i];
                        palindrome.add(pStr);
                     if(currSubStr.length +2 > lps.length){
                        lps =pStr;
                    }
                } 
            }
            j++;
        }
    }
    return lps;
};
