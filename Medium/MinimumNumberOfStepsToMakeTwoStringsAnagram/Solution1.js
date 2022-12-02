/**
 * @param {string} s
 * @param {string} t
 * @return {number}
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
var minSteps = function(s, t) {
    const map1 = buildHashMap(s);
    const map2 = buildHashMap(t);
    let swaps = 0;
    for(let char of map1.keys()){
        let frq = 0;
        if(map2.has(char)){
            frq = map2.get(char);
        }
        if(map1.get(char) > frq){
            swaps += map1.get(char) - frq;
        }
    }
    return swaps;
};
