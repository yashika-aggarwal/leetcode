/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;
    let twenties = 0;
    for(let bill of bills){
        switch(bill){
            case 5:
                fives++;
                break;
            case 10: 
                if(fives===0){
                    return false;
                }
                fives--;
                tens++;
                break;
            case 20:
                if(tens>0 && fives>0){
                    tens--;
                    fives--;
                }
                else if(fives>2){
                    fives-=3;
                }
                else{
                    return false;
                }
                twenties++;
                break;
        }
    }
    return true;
};
