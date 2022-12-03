/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Heap{
    constructor(size){
        this.heap = [];
    }
    shiftUp(i){
        while(i > 0 && this.heap[Math.floor((i-1)/2)][1] < this.heap[i][1]) {
            let parent = this.heap[Math.floor((i-1)/2)];
            this.heap[Math.floor((i-1)/2)] = this.heap[i];
            this.heap[i] = parent;
            i = Math.floor((i-1)/2);
        }
    }
    shiftDown(i){
        while((2*i+1 < this.heap.length && (this.heap[2*i+1][1] > this.heap[i][1])) || (2*i+2 < this.heap.length && (this.heap[2*i+2][1] > this.heap[i][1]))){
            let maxIndex = i;
            if(2*i+1 < this.heap.length && (this.heap[2*i+1][1] > this.heap[maxIndex][1])){
                maxIndex = 2*i + 1;
            }
            if(2*i+2 < this.heap.length && (this.heap[2*i+2][1] > this.heap[maxIndex][1])) {
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
    insert(num,count){
        this.heap.push([num,count]);
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
    /*changePriority(num){
        let oldp;
        for(let i = 0; i <= this.size; i++){
            if(num === this[i]){
                oldp = this[i][1];
                break;
            }
        }
        this[i] = [num,oldp+1];
        this.shiftDown(i); 
    }*/
}
var topKFrequent = function(nums, k) {
    const counts = new Map();
    for(let num of nums){
        if(counts.has(num)){
            counts.set(num,counts.get(num)+1);
        }else{
            counts.set(num,1);
        }
    }
    const heap = new Heap(k);
    for(let num of counts.keys()){
        let count = counts.get(num);
        heap.insert(num,count);
    }
    const topk = [];
    for(let i = 0; i < k; i++){
        topk.push(heap.extractMax()[0]);
    }
    return topk;
};
