/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const loses = new Map();
    for(let match of matches){
        const [winner,loser] = match;
        if(!loses.has(winner)){
            loses.set(winner,0);
        }
        if(loses.has(loser)){
            loses.set(loser,loses.get(loser) + 1);
        }
        else{
            loses.set(loser,1);
        }
    }
    const noLost = [];
    const oneLost = [];
    for(let player of loses.keys()){
        if(loses.get(player) === 0){
            noLost.push(player);
        }
        else if(loses.get(player) === 1){
            oneLost.push(player);
        }
    }
    noLost.sort(function(a,b){return a-b});
    oneLost.sort(function(a,b){return a-b});
    
    return [noLost,oneLost];
};

