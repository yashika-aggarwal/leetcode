/**
 * @param {string} date
 * @return {string}
 */
let dict = {"Jan":"01", "Feb":"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"};
var reformatDate = function(date) {
    let words = date.split(" ");
    let day = words[0].slice(0,words[0].length-2);
    if(day.length===1){
        day= "0"+day;
    }
    let month = words[1];
    let year = words[2];
    return year+"-"+ dict[month]+"-"+day;
};
