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
var middleNode = function(head) {
    let fastp = head;
    let slowp = head;
    while(fastp.next){
        fastp = fastp.next;
        slowp= slowp.next;
        if(fastp.next){
            fastp = fastp.next;
        }
    }
    return slowp;
};
