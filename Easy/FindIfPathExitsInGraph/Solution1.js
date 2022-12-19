/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function reach(adj,x,y,visited){
    visited.add(x);
    if(adj[x] === undefined){
        return false;
    }
    for(let w of adj[x]){
        if(!visited.has(w)){
            if(w === y){
                return true;
            }
            if(reach(adj,w,y,visited)){
                return true;
            }
        }
    }  
    return false;
}
var validPath = function(n, edges, source, destination) {
    if(source === destination){
        return true;
    }
    const adj = new Array(n);
    for(let edge of edges){
        const [a,b] = edge;
        if(adj[a] === undefined){
            adj[a] = [];
        }
        if(adj[b] === undefined){
            adj[b] = [];
        }
        const adjlistA = adj[a];
        adjlistA.push((b));
        adj[a] = adjlistA;
        const adjlistB = adj[b];
        adjlistB.push((a));
        adj[b] = adjlistB;
    }
    const visited = new Set();
    return reach(adj,source,destination,visited);
};
