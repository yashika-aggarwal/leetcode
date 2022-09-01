/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let r = 0; r < accounts.length; r++){
        let currWealth = accounts[r][0];
        for(let c = 1; c < accounts[r].length; c++){
            currWealth += accounts[r][c];
        }
        maxWealth = Math.max(currWealth,maxWealth);
    }
    return maxWealth;
};
