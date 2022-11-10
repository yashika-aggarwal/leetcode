/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let letters = [];
    for(let letter of s){
        if(letters.length > 0){
            const [top,count] = letters[letters.length - 1];
            if(count === k - 1 && top === letter){
            letters.pop();
            }
            else{
                if(top === letter){
                    letters[letters.length - 1] = [top,count+1];
                }
                else{
                   letters.push([letter,1]); 
                }  
            }
        }
        else{
            letters.push([letter,1]); 
        }
    }
    let reducedStr = '';
    for(const letter of letters){
        for(let count = 0; count < letter[1]; count++){
            reducedStr += letter[0];
        }
    }
    
    return reducedStr;
};
