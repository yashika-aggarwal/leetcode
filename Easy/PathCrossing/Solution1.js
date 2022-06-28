/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let points = new Set();
    points.add("0-0");
    let x = 0;
    let y = 0;
    for(let move of path){
        switch(move) {
            case "N":
                y++;
                break;
            case "S":
                y--;
                break;
            case "E":
                x++;
                break;
            case "W":
                x--;
                break;
        }
        let currPos = ""+x+"-"+y;
        if(points.has(currPos)){
            return true;
        }
        else{
            points.add(currPos);
        }
    }
    return false;
};
