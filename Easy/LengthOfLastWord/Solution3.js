/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lastword = s.replace(/\s+$/gm,'').match(/\w+$/gm)[0];
    return lastword.length;
};
