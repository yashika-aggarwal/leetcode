/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    let TotalCount = 0;
    const points = new Map();
    for(let circle of circles){
        const [cx,cy,r] = circle;
        let count = 0;
        for(let x = cx - r; x <= cx + r; x++){
            for(let y = cy - r; y<= cy + r; y++){
                const distance = Math.pow((cx-x),2) + Math.pow((cy-y),2);
                if(distance <= Math.pow(r,2)){
                    if(points.has(x) && !points.get(x).has(y)){
                        const curr = points.get(x);
                        curr.add(y);
                        points.set(x,curr);
                        count++;   
                    }
                    if(!points.has(x)){
                        const currSet = new Set();
                        currSet.add(y);
                        points.set(x,currSet);
                        count++;
                    }
                }
            }
        }
        TotalCount += count;
    }
    return TotalCount;
};
