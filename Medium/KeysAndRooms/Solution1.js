/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function Explore(v,adj,visited){
    visited[v] = 1;
    if(adj[v] === undefined){
        return visited;
    }
    for(let w of adj[v]){
        if(visited[w] === 0){
            visited = Explore(w,adj,visited);
        }
    }
    return visited;
}

var canVisitAllRooms = function(rooms) {
    let used = new Array(rooms.length).fill(0);
    used = Explore(0,rooms,used);
    for(let v of used){
        if(v === 0){
            return false;
        }
    }
    return true;
};
