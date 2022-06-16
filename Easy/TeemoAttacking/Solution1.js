/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time =duration;
    let i = 0;
    while(i<timeSeries.length-1){
        let nextAttack = timeSeries[i+1]-timeSeries[i];
        if(nextAttack<duration){
            time+=nextAttack;
        }
        else{
            time+= duration;
        }
        i++
    }
    return time;
};
