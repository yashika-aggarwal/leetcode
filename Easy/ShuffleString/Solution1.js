/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
   const restoredStr = [];
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        restoredStr[indices[i]] = char;
    }
    return restoredStr.join("");
};
