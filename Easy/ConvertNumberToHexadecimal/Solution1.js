/**
 * @param {number} num
 * @return {string}
 */
const hexTable={
    10:"a",
    11:"b",
    12:"c",
    13:"d",
    14:"e",
    15:"f"
};

var toHex = function(num) {
   let isNegative = false; 
    let hexStr = "";
    if(num<0){
        isNegative = true;
        num = -num;
    }
    while(num>=16){
        let r = num%16;
        num = (num-r)/16;
        if(isNegative){
            r= -(r-15-1);
            if(r===16){
                r -=16;
                num -=1;
            }
            num +=1;
        }  
        hexStr = r<10? r+hexStr: hexTable[r]+hexStr; 
    }
     if(isNegative){
    while(hexStr.length<8){
        num= -(num-15-1);
        hexStr = num<10? num + hexStr: hexTable[num] + hexStr; 
        num = 1;
      } 
    }
    else{
        hexStr = num<10? num + hexStr: hexTable[num] + hexStr; 
    }
    return hexStr;
};
