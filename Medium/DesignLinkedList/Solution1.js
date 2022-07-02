function Node(val,next){
     this.val = val===undefined?0:val;
     this.next = next===undefined? null:next;
 }
var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currIndx = 0;
    let cur = this.head;
    while(cur){
        if(currIndx===index){
            return cur.val;
        }
        cur = cur.next;
        currIndx++;
    }  
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let cur = this.head;
    this.head = new Node(val,cur);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
   let cur = new Node(val); 
    if(!this.head){
        this.head = cur;
    }
    else{
        let tail = this.head;
        while(tail.next){
            tail=tail.next; 
        }
        tail.next =cur;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    //console.log(this.head);
    let prevIndx =0;
    let prev = this.head;
    if(index===0){
        this.head = new Node(val,prev);
    }
    while(prevIndx<index-1 && prev.next){
        prev= prev.next;
        prevIndx++;
    }
    if(prevIndx===index-1 && prev){
        let cur = new Node(val,prev.next);
        prev.next = cur;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index===0){
        this.head = this.head.next;
    }
    let prevIndx =0;
    let prev = this.head;
    while(prevIndx<index-1 && prev.next){
        prev = prev.next;
        prevIndx++;
    }
    if(prevIndx===index-1){
        if(prev.next){
            let cur = prev.next;
            prev.next = cur.next;
        }
    } 
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
