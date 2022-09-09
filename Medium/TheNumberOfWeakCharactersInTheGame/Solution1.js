/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties.sort(function(a, b){return (a[0] - b[0])});
    let weaks = 0;
    let groups = [[]];
    let currAtt = properties[0][0];
    for(let char of properties){
        if(groups.length === 0 || char[0] !== currAtt){
            groups.push([char[1]]);
            currAtt = char[0];
        }
        else{
            let group = groups[groups.length-1];
            group.push(char[1]);
            groups[groups.length-1] = group;
        }
    }
    let maxDef = Math.max(...groups[groups.length-1]);
    for(let i = groups.length -2; i >= 0; i--){ 
        let currMax = groups[i][0];
        for(let def of groups[i]){
            currMax = Math.max(currMax,def);
            if(maxDef > def){
                weaks++;
            }
        }
        maxDef = Math.max(maxDef,currMax);
    }
    return weaks;
};
