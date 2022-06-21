/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fastp=head;
    let slowp = head;
    let currHead = null;
    for(let i=0;i<n;i++){
        fastp = fastp.next;
    }
    while(fastp){
        fastp = fastp.next;
        currHead = slowp;
        slowp = slowp.next;
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
