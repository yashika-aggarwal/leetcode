/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let fastp = head;
    let slowp = head;
    let currHead = null;
    while(fastp.next){
        fastp = fastp.next;
        currHead = slowp;
        slowp= slowp.next;
        if(fastp.next){
            fastp = fastp.next;
        }
    }
    let tail = slowp.next;
    if(tail){
      slowp.val = tail.val;
      slowp.next = tail.next;   
    }
    else{
        if(currHead){
            currHead.next=null;
        }
        else{
            return currHead;
        }
    }
    return head;
};
