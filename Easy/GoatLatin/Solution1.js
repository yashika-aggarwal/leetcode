/**
 * @param {string} sentence
 * @return {string}
 */
const vowels= new Set("aeiou");
var toGoatLatin = function(sentence) {
    let words = sentence.split(" ");
    let goatLatin ="";
    let LetterA="";
    for(let i=0;i<words.length;i++){
        let curr = words[i];
        let first = words[i][0];
        LetterA+="a";
        if(!vowels.has(first.toLowerCase())){
            curr = words[i].slice(1)+first;
        }
         if(i===words.length-1){
            goatLatin+=curr+"ma"+LetterA;
         }
        else{
            goatLatin+=curr+"ma"+LetterA+" ";
        }
    }
    return goatLatin;
};
