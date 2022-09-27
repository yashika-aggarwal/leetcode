/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function createGraph(mat){
    const graph = new Array(mat.length);
    for(let i = 0; i < mat.length; i++){
        if(graph[i] === undefined){
            graph[i] = [];
        }
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1){
                 let vertices = graph[i];
                vertices.push(j);
                graph[i] = vertices;
            }
        }
    }
    return graph;
}   

function DFS(graph){
    let used = new Array(graph.length).fill(0);
    let ccs = 0;
    for(let v = 0; v < graph.length; v++){
        if(used[v] === 0){
            used = ExploreCCs(v,graph,used);
            ccs++;
        }
    }
    return ccs;
}

function ExploreCCs(v,graph,used){
    used[v] =  1;
    for(let w of graph[v]){
        if(used[w] === 0){
            used = ExploreCCs(w,graph,used);
        }
    }
    return used;
}
var findCircleNum = function(isConnected) {
   const Graph = createGraph(isConnected);
   return DFS(Graph);
};
