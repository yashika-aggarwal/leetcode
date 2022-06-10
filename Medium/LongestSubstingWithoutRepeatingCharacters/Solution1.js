/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // find the longest first window
    let chars = new Set();
    let len = 0;
    for(let i =0; i< s.length; i++){
        let char = s[i];
        if(!chars.has(char)){
            chars.add(char);
            len++;
        }
        else{
            break;
        }
    }
    let maxLen = len;
    for(let indx=1;indx<s.length; indx++){
        chars.delete(s[indx-1]);
        len --;
        for(let j = indx+len; j<s.length; j++){
            let char = s[j];
            if(!chars.has(char)){
                chars.add(char);
                len++;
            }
            else{
                break;
            }
        }
        maxLen = Math.max(len,maxLen);
    }
    return maxLen;
};
