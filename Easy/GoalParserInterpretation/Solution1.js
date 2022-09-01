/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let indx = 0;
    let interpt = '';
    while(indx < command.length){
        if(command[indx] === "("){
            indx++;
            if(command[indx] === ")"){
                interpt+="o";
            }
            else{
                interpt+="al"
                indx+=2;
            }
        }
        else{
            interpt+="G";
        }
        indx++;
    }
    return interpt;
};
