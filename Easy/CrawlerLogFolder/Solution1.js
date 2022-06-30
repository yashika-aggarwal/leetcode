/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let ops = 0;
    for(let step of logs){
        if(step==="../"){
            if(ops>0){
              ops--;
            }
        }
        else if(step!=="./"){
            ops++;
        }
    }
    return ops;
};
