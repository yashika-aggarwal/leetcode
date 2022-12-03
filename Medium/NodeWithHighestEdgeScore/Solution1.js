/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const edgeCount = new Map();
    let node = -1;
    for(let i = 0; i < edges.length; i++){
        const to = edges[i];
        if(edgeCount.has(to)){
            edgeCount.set(to,edgeCount.get(to) + i);
        }
        else{
            edgeCount.set(to,i);
        }
        if(node < 0){
            node = to;
        }
        else if(edgeCount.get(to) > edgeCount.get(node) || (edgeCount.get(to) === edgeCount.get(node) && node > to)){
            node = to;
        }
    }
    return node;
};
