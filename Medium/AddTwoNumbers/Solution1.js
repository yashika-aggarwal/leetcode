/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// create a Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(element) {
        var node = new ListNode(element);
        if (!this.head) {
            this.head = node;
            return this.head;
        }
        var tail = this.head;
            
            while(tail.next !== null) {
               tail = tail.next;
            }
           tail.next = node;
         return this.head;
    }
}

var addTwoNumbers = function(l1, l2) {
     var sumList = new LinkedList();
        var sum = 0;
    while(l1!==null||l2!==null){
        if(l1!==null && l2!==null){
         sum = sum + l1.val + l2.val;
        if(sum<=9){
            sumList.add(sum);
            sum = 0;
        }
        else{
           var uD = sum%10;
            sumList.add(uD);
            sum = Math.floor(sum/10);
        }
         l1 = l1.next;
         l2 = l2.next;
    }
        else if(l1!==null){
            sum = sum + l1.val;
            if(sum<=9){
            sumList.add(sum);
            sum = 0;
        }
        else{
            uD = sum%10;
            sumList.add(uD);
            sum = Math.floor(sum/10);
        }
            l1=l1.next;
        }
        else{
           sum = sum + l2.val;
            if(sum<=9){
            sumList.add(sum);
            sum = 0;
        }
        else{
            uD = sum%10;
            sumList.add(uD);
            sum = Math.floor(sum/10);
        }
            l2=l2.next;
        } 
        }
    if(sum!==0){
        sumList.add(sum);
    }
    return sumList.head;
};
