/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function combinations(n,r){
    if(r == 0){
        return 1;
    }
    return parseInt(((n-r+1)*combinations(n,r-1))/r);   
}
var interchangeableRectangles = function(rectangles) {
    const ratios = new Map();
    for(const rectangle of rectangles){
        const [width,height] = rectangle;
        const ratio = width/height;
        if(ratios.has(ratio)){
            ratios.set(ratio,ratios.get(ratio) + 1);
        }
        else{
            ratios.set(ratio,1);
        }
    }
    let pairs = 0;
    for(const count of ratios.values()){
        pairs += combinations(count,2);
    }
    return pairs;
};
