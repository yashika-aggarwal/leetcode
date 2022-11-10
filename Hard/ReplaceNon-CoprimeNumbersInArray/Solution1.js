/**
 * @param {number[]} nums
 * @return {number[]}
 */
function gcd(a, b) {
    // write your code here
   // console.log("Here");
    let greaterNum = b;
    let smallerNum = a;
    if (a > b) {
        greaterNum = a;
        smallerNum = b;
    }
    if (smallerNum === 0) {
        return greaterNum;
    }
    let remainder = greaterNum % smallerNum;
    return gcd(remainder, smallerNum);
}
function lcm(a, b, G) {
    // write your code here
    let greaterNum = b;
    let smallerNum = a;
    if (a > b) {
        greaterNum = a;
        smallerNum = b;
    }
    let common_factor = 1;
    for (let l = greaterNum; l <= greaterNum * smallerNum; l )
    return (a * b) / G;
}

var replaceNonCoprimes = function(nums) {
    const numStack  = [];
    for(let num of nums){
        if(numStack.length === 0){
            numStack.push(num);
            continue;
        }
        let top = numStack[numStack.length - 1];
        let GCD = gcd(top,num);
        while(GCD > 1 && numStack.length > 0){
            num = lcm(top,num,GCD);
            numStack.pop();
            if(numStack.length > 0){
                top = numStack[numStack.length - 1];
            }
            GCD = gcd(top,num);
        }
        numStack.push(num);
    }
    return numStack;
};
