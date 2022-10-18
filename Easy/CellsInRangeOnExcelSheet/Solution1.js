/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const cells = [];
    for(let c = s.charCodeAt(0); c <= s.charCodeAt(3); c++){
        const col = String.fromCharCode(c);
        for(let r = parseInt(s[1]); r<= parseInt(s[4]); r++){
            cells.push(col+r);
        }
    }
    return cells;
};
