/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count =0;
    if(num===0){
        return count;
    }
    while(num!==0){
        if(num%2!==0){
            num = num-1;
            count++;
        }
        num=num/2;
        count++;
    }
    return count-1;
};
