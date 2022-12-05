/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function reverseList(head) {
    if(!head){
        return head;
    }
    let rList = new ListNode(head.val);
    while(head.next){
        head= head.next;
        let node = new ListNode(head.val);
        node.next = rList;
        rList = node;
    }
    return rList;
};
var pairSum = function(head) {
    let fastp = head;
    let slowp = head;
    while(fastp.next){
        fastp = fastp.next;
        slowp= slowp.next;
        if(fastp.next){
            fastp = fastp.next;
        }
    }
    if(slowp === fastp){
        return head.val + head.next.val;
    }
    const half2 = reverseList(slowp);
    slowp.next =  half2;
    fastp = slowp.next;
    slowp = head;
    let maxSum = -1;
    while(fastp){
        maxSum = Math.max(maxSum,slowp.val+fastp.val);
        fastp = fastp.next;
        slowp = slowp.next;
    }
    return maxSum;
};
