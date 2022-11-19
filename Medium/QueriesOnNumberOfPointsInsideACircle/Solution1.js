/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const answer = [];
    for(let query of queries){
        const [cx,cy,r] = query;
        let count = 0;
        for(let point of points){
            const [x,y] = point;
            const distance = Math.pow((cx-x),2) + Math.pow((cy-y),2);
            if(distance <= Math.pow(r,2)){
                count++;
            }
        }
        answer.push(count);
    }
    return answer;
};
