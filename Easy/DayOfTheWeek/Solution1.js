/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [3,3,6,8,11,13,16,19,21,24,26,29]

var dayOfTheWeek = function(day, month, year) {
    let oddDays =day+((year-1)+Math.floor((year-1)/4)-Math.floor((year-1)/100)+Math.floor((year-1)/400));
    if(month>1){
        oddDays+=months[month-2];
    }
    if((year%4==0 && year%100!==0) || year%400===0){
        if((month>2)){
            oddDays++;
        }
    }
    return days[oddDays%7];
};
