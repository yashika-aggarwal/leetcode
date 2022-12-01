/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const count = new Map();
    for(let char of s){
        if(count.has(char)){
            count.set(char,count.get(char)+1);
        }
        else{
            count.set(char,1);
        }
    }
    const heap = [];
    for(let num of count.keys()){
        heap.push([num,count.get(num)]);
        let i = heap.length - 1;
        while(i > 0 && heap[Math.floor((i-1)/2)][1] < heap[i][1]) {
            let parent = heap[Math.floor((i-1)/2)];
            heap[Math.floor((i-1)/2)] = heap[i];
            heap[i] = parent;
            i = Math.floor((i-1)/2);
        }
    }
    let sortedString = '';
    while(heap.length !== 0){
        const max = heap[0];
        for(let i = 0; i < max[1]; i++){
            sortedString += max[0];
        }
        if(heap.length === 1){
            heap.pop();
            break;
        }
        heap[0] = heap.pop();
        let i = 0;
        while((2*i+1 < heap.length && (heap[2*i+1][1] > heap[i][1])) || (2*i+2 < heap.length && (heap[2*i+2][1] > heap[i][1]))){
            let maxIndex = i;
            if(2*i+1 < heap.length && (heap[2*i+1][1] > heap[maxIndex][1])){
                maxIndex = 2*i + 1;
            }
            if(2*i+2 < heap.length && (heap[2*i+2][1] > heap[maxIndex][1])) {
                maxIndex = 2*i + 2;
            }
            if(maxIndex !== i) {
                let ele = heap[maxIndex];
                heap[maxIndex] = heap[i];
                heap[i] = ele;
                i = maxIndex;
            }
        }
    }
    return sortedString;
};
