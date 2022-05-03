function Node(val,next,min){
    this.val = val;
    this.next = null;
    this.min = val
}

var MinStack = function() {
    this.head = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    if(!this.head){
        this.head = newNode;
    }
    else{
     var top = this.head;
     if(top.min<newNode.min){
        newNode.min = top.min;
     }
     this.head = newNode;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var Top = this.head;
    this.head = Top.next;
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var Top = this.head;
    return Top.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var Top = this.head;
    return Top.min;
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
