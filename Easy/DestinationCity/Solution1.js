/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = new Map(paths);
    for(let path of map.values()){
        if(!map.has(path)){
            return path;
        }
    }
};
