/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function sumOfDigits(n){
    let sumOfDigits = 0;
    while(n>=10){
        let r = n%10;
        sumOfDigits+=r;
        n = (n-r)/10;
    }
    sumOfDigits+=n;
    return sumOfDigits;
}
var countBalls = function(lowLimit, highLimit) {
    let boxs = new Map();
    let maxBallCount = 0;
    for(let ballNum = lowLimit;ballNum<=highLimit;ballNum++){
        let sum = sumOfDigits(ballNum);
        if(boxs.has(sum)){
            let ballCount = boxs.get(sum)+1;
            maxBallCount = Math.max(ballCount,maxBallCount);
            boxs.set(sum,ballCount);
        }
        else{
            maxBallCount = Math.max(1,maxBallCount);
            boxs.set(sum,1);
        }
    }
    return maxBallCount;
};
