/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let ban = new Set(banned);
    let words = paragraph.split(/\s|[!?',;.]/);
    let map = new Map();
    let max = 0;
    let word=words[0].toLowerCase();
    for(let i=0;i<words.length;i++){
        if(words[i]!==""){
            let curr = words[i].toLowerCase();
            if(!ban.has(curr)){
                if(map.has(curr)){
                    let count = map.get(curr)+1;
                    if(count>max){
                        word = curr;
                    }
                    max = Math.max(count,max);
                    map.set(curr,count);
                }
                else{
                    map.set(curr,1);
                    if(1>max){
                        word = curr;
                    }
                    max = Math.max(max,1);
                }
             }
        }
    }
    return word;
};
