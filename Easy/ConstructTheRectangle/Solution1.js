/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let L = 1;
    let W = area;
    while(W>L){
        L++;
        if(area%L===0){
            W = area/L;
        }
    }
    return [L,W];
};
