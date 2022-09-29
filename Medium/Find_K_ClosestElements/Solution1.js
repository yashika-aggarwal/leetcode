/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function isCloser(x,a,b){
    if(Math.abs(a - x) < Math.abs(b - x) || (Math.abs(a - x) === Math.abs(b - x) && a < b)){
       return true;
    }
    return false;
}
var findClosestElements = function(arr, k, x) {
    const Heap = new Array();
    for(let num of arr){
        Heap.push(num);
        let i = Heap.length - 1;
        while(i > 0 && isCloser(x,Heap[i],Heap[Math.floor((i-1)/2)])){
            let parent = Heap[i];
            Heap[i] = Heap[Math.floor((i-1)/2)];
            Heap[Math.floor((i-1)/2)] = parent;
            i = Math.floor((i-1)/2);
        }
    }
    const closest = [];
    while(closest.length < k){
        closest.push(Heap[0]);
        Heap[0] = Heap.pop();
        let i = 0;
        while((2*i+1 < Heap.length &&  isCloser(x,Heap[2*i+1],Heap[i])) || (2*i+2 < Heap.length && isCloser(x,Heap[2*i+2],Heap[i])) ){
            let max = i;
            if(2*i+1 < Heap.length && isCloser(x,Heap[2*i+1],Heap[max])){
                max = 2*i+1;
            }
            if((2*i+2 < Heap.length && isCloser(x,Heap[2*i+2],Heap[max]))){
                max = 2*i+2;
            }
            if(max !== i){
                let child = Heap[max];
                Heap[max] = Heap[i];
                Heap[i] = child;
                i = max;
            }
        }
    }
    return closest.sort(function(a,b){return a-b;});  
    
};
