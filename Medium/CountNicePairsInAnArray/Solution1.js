/**
 * @param {number[]} nums
 * @return {number}
 */
function reverseNum(num){
    let reversedNum = '';
    while(num >= 10){
        const r = num % 10;
        reversedNum += r;
        num = (num - r)/10;
    }
    if(num >= 0){
        reversedNum += num;
    }
    return parseInt(reversedNum);
}

function combinations(n,r){
    if(r === 0){
        return 1;
    }
    return parseInt(((n-r+1)*combinations(n,r-1))/r);   
}

var countNicePairs = function(nums) {
    const diffs = new Map();
    for(const num of nums){
        const diff = num - reverseNum(num);
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
    return pairs % (Math.pow(10,9) + 7);
};
