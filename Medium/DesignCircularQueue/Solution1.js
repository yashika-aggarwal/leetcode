/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
     this.queue = new Array(k);
     this.read = 0;
     this.write = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false;
    }
    this.queue[this.write] = value;
    this.write = this.write + 1;
    if(this.write === this.queue.length){
        this.write = 0;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }
    delete this.queue[this.read];
    this.read = this.read + 1;
    if(this.read === this.queue.length){
        this.read = 0;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.queue[this.read];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }
    let rear = this.write - 1;
    if(rear < 0){
       rear = this.queue.length - 1; 
    }
    return this.queue[rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.read === this.write && this.queue[this.read] === undefined){
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.read === this.write && this.queue[this.read] !== undefined){
        return true;
    }
    return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
