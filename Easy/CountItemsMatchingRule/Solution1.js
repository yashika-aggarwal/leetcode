/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let matchCount =0;
    for(let [type,color,name] of items){
        switch(ruleKey){
            case "type":
                if(ruleValue===type){
                    matchCount++;
                }
                break;
            case "color":
                if(ruleValue===color){
                    matchCount++;
                }
                break;
            case "name":
                if(ruleValue===name){
                    matchCount++;
                }
                break; 
        }
    }
    return matchCount;
};
