/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function buildHashMap(str){
    const counts = new Map();
    for(let char of str){
        if(counts.has(char)){
            counts.set(char,counts.get(char) + 1);
        }
        else{
            counts.set(char,1);
        }
    }
    return counts;
}
function buildArr(iterator){
    const arr = [];
    for(const x of iterator){
        arr.push(x);
    }
    return arr;
}
var closeStrings = function(word1, word2) {
    const map1 = buildHashMap(word1);
    const map2 = buildHashMap(word2);
    const counts1 = buildArr(map1.values());
    const counts2 = buildArr(map2.values());
    if(map1.size !== map2.size){
        return false;
    }
    for(const char of map1.keys()){
        if(!map2.has(char)){
            return false;
        }
        else{
            map1.delete(char);
            map2.delete(char);
        }
    }
    if(map1.size !== 0 || map2.size !== 0){
        return false;
    }
    if(counts2.length !== counts1.length){
        return false;
    }
    counts1.sort(function(a,b){return a-b});
    counts2.sort(function(a,b){return a-b});
    for(let i = 0; i < counts1.length; i++){
        if(counts1[i] !== counts2[i]){
            return false;
        }
    }
    return true;
};
