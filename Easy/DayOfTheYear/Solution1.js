/**
 * @param {string} date
 * @return {number}
 */
const months = [31,28,31,30,31,30,31,31,30,31,30,31];
var dayOfYear = function(date) {
    let year = date.slice(0,4);
    let days = parseInt(date.slice(8,10));
    let month = parseInt(date.slice(5,8));
    if(month>1){
        for(let i =0;i<month-1;i++){
            days+=months[i];
        }
    }
    if((year%4===0 && year%100!==0) || year%400===0){
        if(month>2){
            days++;
        }
    }
    return days;
};
