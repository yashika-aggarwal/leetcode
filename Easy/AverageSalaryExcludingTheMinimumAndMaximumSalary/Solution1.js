/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = 0;
    for(let curr of salary){
        min = Math.min(min,curr);
        max = Math.max(max,curr);
        sum+=curr;
    }
    return (sum-min-max)/(salary.length-2);
};
