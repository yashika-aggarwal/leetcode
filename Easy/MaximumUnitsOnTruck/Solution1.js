/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    for(let i=1;i<boxTypes.length;i++){
        let j = i;
        while(j>0 && boxTypes[j-1][1]<(boxTypes[j][1])){
              let greater = boxTypes[j];
              boxTypes[j]= boxTypes[j-1];
              boxTypes[j-1]=greater;
              j--;
        }
    }
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
