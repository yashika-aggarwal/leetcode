/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defn="";
    for(let i=0; i<address.length;i++){
        if(address[i]==="."){
            defn+="[.]";
        }
        else{
            defn+=address[i];
        }
    }
    return defn;
};
