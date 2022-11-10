/**
 * @param {number[]} nums
 * @return {number}
 */
function combinations(n,r){
    if(r === 0){
        return 1;
    }
    return parseInt(((n-r+1)*combinations(n,r-1))/r);   
}

var countBadPairs = function(nums) {
    const diffs = new Map();
    for(let i = 0; i < nums.length; i++){
        const diff = nums[i] - i;
        if(diffs.has(diff)){
            diffs.set(diff,diffs.get(diff) + 1);
        }
        else{
            diffs.set(diff,1);
        }
    }
    let pairs = 0;
    for(const count of diffs.values()){
        pairs += combinations(count,2);
    }
    return combinations(nums.length,2) - pairs;
};
