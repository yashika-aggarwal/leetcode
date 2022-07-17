/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let x=1;
    let sumArr = [];
    for(let i =1; i<n;i+=2){
        sumArr.push(x);
        sumArr.push(-x);
        x++;
    }
    if(n%2!==0){
        sumArr.push(0);
    }
    return sumArr;
};
