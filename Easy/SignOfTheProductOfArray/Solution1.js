/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let signPro = 1;
    for(let num of nums){
        if(num===0){
            return 0;
        }
        else if(num<0){
            signPro*=-1;
        }
        else{
            signPro*=1;
        }
    }
    return signPro;
};
