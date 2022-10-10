/**
 * @param {string} palindrome
 * @return {string}
 */
function isPalindrome(str){
    let p1 = 0;
    let p2 = str.length - 1;
    while(p1 < p2){
        if(str[p1] !== str[p2]){
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}
var breakPalindrome = function(palindrome) {
    let notPal = '';
    if(palindrome.length === 1){
        return notPal;
    }
    let changed = false;
    for(let i = 0; i < palindrome.length; i++){
        let char = palindrome[i];
        if(!changed){
            if(char !== 'a'){
                if(isPalindrome(notPal+'a'+palindrome.substring(i+1))){
                    notPal += char;
                    continue;
                }
                notPal += 'a';
                changed = true;   
            }
            else if(i === palindrome.length - 1){
                notPal += 'b';
            }
            else{
                notPal += char;
            }
        }
        else{
            notPal += char;
        }
    }
    return notPal;
};
