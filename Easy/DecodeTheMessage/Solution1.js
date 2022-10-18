/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const substiutionTable = new Map();
    let charCode = 97;
    for(let char of key){
        if(char !== ' ' && !substiutionTable.has(char)){
            substiutionTable.set(char,String.fromCharCode(charCode));
            charCode++;
        }
    }
    let decoded = '';
    for(let char of message){
        if(char === ' '){
            decoded += char;
        }
        else{
            decoded += substiutionTable.get(char);
        }
    }
    return decoded;
};
