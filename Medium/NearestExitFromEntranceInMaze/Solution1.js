/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
class myQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(key) {
        let node = new Node(key,null);
        if(!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    dequeue() {
        let popped = this.head.val;
        this.head = this.head.next;
        if(!this.head) {
            this.tail = null;
        }
        return popped;
    }
    empty() {
        return this.head? false:true;
    }
    peekFront() {
        return this.head.val;
    }
}
function isExit(rows,cols,cell){
    const [row,col] = cell;
    if(row === 0 || col === 0){
        return true;
    }
    if(row === rows -1 || col === cols -1){
        return true;
    }
    return false;
}
function isNotEntrance(cell,entrance){
    if(entrance[0] === cell[0] && entrance[1] === cell[1]){
        return true;
    }
    return false;
}
var nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const queue = new myQueue();
    queue.enqueue(entrance);
    queue.enqueue(null);
    let depth = 0;
    while(!queue.empty()){
        const curr = queue.dequeue();
        if(curr){
            if(!isNotEntrance(curr,entrance) && isExit(rows,cols,curr)){
                return depth;
            }   
        }
        else{
            continue;
        }
        const [currR,currC] = curr;
        if(maze[currR][currC]){
            if(currR > 0 && maze[currR-1][currC] === '.'){
                queue.enqueue([currR-1,currC]);
            }
            if(currR < rows - 1 && maze[currR + 1][currC] === '.'){
                queue.enqueue([currR+1,currC]);
            }
            if(currC > 0 && maze[currR][currC-1] === '.'){
                queue.enqueue([currR,currC-1]);
            }
            if(currC < cols - 1 && maze[currR][currC+1] === '.'){
                queue.enqueue([currR,currC+1]);
            }
            maze[currR][currC] = null;   
        }
        if(!queue.empty() && !queue.peekFront()){
                queue.dequeue();
                queue.enqueue(null);
                depth++;
        }
    }
    return - 1;
};
