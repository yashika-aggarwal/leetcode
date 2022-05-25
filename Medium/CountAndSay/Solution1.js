/**
 * @param {number} n
 * @return {string}
 */
const says ={};
function read(s){
    let say = "";
    let count = 1;
    let num = s[0];
    for(let i=1; i<=s.length; i++){
        if(s[i]===num){
            count++;
        }
        else{
            say+= count+num;
            num = s[i];
            count=1;
        }
    }
    return say;
}
var countAndSay = function(n) {
    if(says[n]){
        return says[n];
    }
    else{
        if(n===1){
            says[n]="1";
            return "1";
        }
        else{
            says[n] = read(countAndSay(n-1));
            return says[n];
        }
    }  
};
