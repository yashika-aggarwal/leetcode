/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let mappedStr = "";
    let indx=s.length-1;
    while(indx>=0){
        if(s[indx]==='#'){
            let digits = s.substr(indx-2,2);
            let char = String.fromCharCode(96 + parseInt(digits));
            mappedStr = char + mappedStr;
            indx-=3;
        }
        else{
            let char = String.fromCharCode(96+parseInt(s[indx]));
            mappedStr = char + mappedStr;
            indx--;
        }
    }
    return mappedStr;
};
