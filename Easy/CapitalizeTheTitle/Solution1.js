/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = title.split(" ");
    let captilizedTitle = "";
    for(let indx in words){
        let word = words[indx];
        if(word.length<3){
            captilizedTitle+=word.toLowerCase();
        }
        else{
            captilizedTitle+=word[0].toUpperCase()+word.slice(1).toLowerCase();
        }
        if(indx<words.length-1){
            captilizedTitle+=" ";
        }
    }
    return captilizedTitle;
};
