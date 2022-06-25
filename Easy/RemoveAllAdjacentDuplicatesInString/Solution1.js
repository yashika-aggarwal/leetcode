/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let letters = [];
    for(let letter of s){
        let top = letters[letters.length-1];
        if(top===letter){
            letters.pop();
        }
        else{
            letters.push(letter);
        }
    }
    return letters.length===0? ""
        :letters.reduce((final,value)=>{
            return final+value;
         });
};
