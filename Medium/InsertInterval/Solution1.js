/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newIntervals = [];
    let inserted = false;
    if(intervals.length > 0 && newInterval !== 0 && intervals[0][0] > newInterval[1]){
        newIntervals.push(newInterval);
        inserted = true;
    }
    for(let i = 0; i < intervals.length; i++){
        if(!inserted){
            if(intervals[i][1] >= newInterval[0]){
                intervals[i] = [Math.min(intervals[i][0],newInterval[0]),Math.max(intervals[i][1],newInterval[1])]; 
                newIntervals.push(intervals[i]);
                inserted = true;
            }
            else if(i < intervals.length -1 && intervals[i+1][0] > newInterval[1]){
                newIntervals.push(intervals[i]);
                newIntervals.push(newInterval);
                inserted = true;
            }
            else{
                newIntervals.push(intervals[i]);
            }
        }  
        else if(inserted && newIntervals[newIntervals.length-1][1] >= intervals[i][0]){

            newIntervals[newIntervals.length-1] = [Math.min(intervals[newIntervals.length-1][0],intervals[i][0]),Math.max(intervals[newIntervals.length-1][1],intervals[i][1])];
        }
        else{

            newIntervals.push(intervals[i]);
        }
    }
    if(!inserted){
        newIntervals.push(newInterval);
    }
    return newIntervals;
};
