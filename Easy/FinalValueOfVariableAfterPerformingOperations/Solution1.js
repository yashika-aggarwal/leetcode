/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let operation of operations){
        if(operation[1]==='+'){
            x++;
        }
        else{
            x--;
        }
    }
    return x;
};
