/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 const mod = BigInt(1e9 + 7);
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort(function(a, b){return a - b});
    verticalCuts.sort(function(a, b){return a - b});
    let MaxHdiff = horizontalCuts[0]-0;
    let MaxWdiff = verticalCuts[0]-0;
    let indx=0;
    let len = horizontalCuts.length;
    if(verticalCuts.length>horizontalCuts.length){
        len = verticalCuts.length;
    }
    while(indx<len-1){
        if(indx<horizontalCuts.length-1){
            MaxHdiff = (Math.max(MaxHdiff,horizontalCuts[indx+1]-horizontalCuts[indx]));
        }
        if(indx<verticalCuts.length-1){
            MaxWdiff = Math.max(MaxWdiff,verticalCuts[indx+1]-verticalCuts[indx]);
        }
        indx++;
    }
    MaxHdiff = BigInt(Math.max(MaxHdiff,h-horizontalCuts[horizontalCuts.length-1]));
    MaxWdiff = BigInt(Math.max(MaxWdiff,(w-verticalCuts[verticalCuts.length-1])));
    return (MaxHdiff*MaxWdiff%mod);
};
