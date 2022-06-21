/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let curr = s[0];
    let start =0;
    let end = start;
    let intervals=[];
    for(let i=1;i<=s.length;i++){
        let char = s[i];
        if(char===curr){
            end=i;
        }
        else{
            let size = end-start+1;
            if(size>2){
                intervals.push([start,end]);
            }
            curr=char;
            start = i;
            end = start;
        }
    }
    return intervals;
};
