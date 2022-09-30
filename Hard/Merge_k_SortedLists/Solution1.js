/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class LinkedList {
    constructor(val, next) {
        this.head = null;
        this.tail = null;
    }
    add(key){
        let node = new ListNode(key);
         if(!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}
var mergeKLists = function(lists) {
    let Heap = [];
    for(let list of lists){
        let currNode = list;
        while(currNode!==null){
            Heap.push(currNode.val);
            let i = Heap.length -1;
            while(i > 0 && Heap[Math.floor((i-1)/2)] > Heap[i]){
                let parent = Heap[Math.floor((i-1)/2)];
                Heap[Math.floor((i-1)/2)] = Heap[i];
                Heap[i] = parent;
                i = Math.floor((i-1)/2);
            }
            currNode = currNode.next;
        }
    }
    let mergedList = new LinkedList();
    while(Heap.length > 1){
        mergedList.add(Heap[0]);        
        Heap[0] = Heap.pop();
        let i = 0;
        while((2*i+1 < Heap.length && Heap[2*i+1] < Heap[i]) || (2*i+2 < Heap.length && Heap[2*i+2] < Heap[i])){
            let min = i;
            if(2*i+1 < Heap.length && Heap[2*i+1] < Heap[min]){
                min = 2*i+1;
            }
            if(2*i+2 < Heap.length && Heap[2*i+2] < Heap[min]){
                min = 2*i+2;
            }
            if(min !== i){
                let child = Heap[min];
                Heap[min] = Heap[i];
                Heap[i] = child;
                i = min;
            }
        }
    }
    if(Heap.length > 0){
        mergedList.add(Heap[0]);
    }
    return mergedList.head;
    
};
