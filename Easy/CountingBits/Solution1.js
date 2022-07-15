/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const range =[];
    let currNum = 0;
    while(currNum<=n){
        if(currNum<2){
            range.push(currNum);
        }
        else{
            let powOf2 = Math.trunc(Math.log2(currNum));
            let pos = currNum - Math.pow(2,powOf2); 
            if(Math.log2(currNum) - powOf2===0){
                range.push(1);
            }
            else{
                range.push(range[pos]+1);
            }
        }
        currNum++;
    }
    return range;
};
