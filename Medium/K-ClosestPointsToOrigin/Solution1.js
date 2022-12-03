/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
class Heap{
    constructor(size){
        this.heap = [];
    }
    shiftUp(i){
        while(i > 0 && this.heap[Math.floor((i-1)/2)][1] > this.heap[i][1]) {
            let parent = this.heap[Math.floor((i-1)/2)];
            this.heap[Math.floor((i-1)/2)] = this.heap[i];
            this.heap[i] = parent;
            i = Math.floor((i-1)/2);
        }
    }
    shiftDown(i){
        while((2*i+1 < this.heap.length && (this.heap[2*i+1][1] < this.heap[i][1])) || (2*i+2 < this.heap.length && (this.heap[2*i+2][1] < this.heap[i][1]))){
            let maxIndex = i;
            if(2*i+1 < this.heap.length && (this.heap[2*i+1][1] < this.heap[maxIndex][1])){
                maxIndex = 2*i + 1;
            }
            if(2*i+2 < this.heap.length && (this.heap[2*i+2][1] < this.heap[maxIndex][1])) {
                maxIndex = 2*i + 2;
            }
            if(maxIndex !== i) {
                let ele = this.heap[maxIndex];
                this.heap[maxIndex] = this.heap[i];
                this.heap[i] = ele;
                i = maxIndex;
            }
        }
    }
    insert(point,dist){
        this.heap.push([point,dist]);
        let i = this.heap.length -1 ;
        this.shiftUp(i);
    }
    extractMax(){
        const max = this.heap[0];
        if(this.heap.length === 1){
            return max;
        }
        this.heap[0] = this.heap.pop();
        let i = 0;
        this.shiftDown(i);
        return max;
    }
}
var kClosest = function(points, k) {
    const heap = new Heap();
    for(let point of points){
        const [x,y] = point;
        const distance = x*x + y*y;
        heap.insert(point,distance);
    }
    const topK = [];
    for(let i = 0; i < k; i++){
        topK.push(heap.extractMax()[0]);
    }
    return topK;
};
