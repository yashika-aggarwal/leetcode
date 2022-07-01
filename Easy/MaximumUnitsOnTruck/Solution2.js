/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
     boxTypes.sort((a, b) => {
       return b[1] - a[1]; 
    });
    let totalUnits = 0;
    let indx = 0;
    while(truckSize>0 && indx<boxTypes.length){
        let boxType = boxTypes[indx];
        let boxes = boxType[0];
        if(boxes>truckSize){
            boxes=truckSize;
        }
        totalUnits += boxes*boxType[1];
        truckSize-=boxes;
        indx++;
    }
    return totalUnits;
};
