/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastp = head;
    let slowp = head;
    // if head is null return false
    if(!head || !head.next){
       return false;
    }
    while(fastp){
        fastp=fastp.next;
        if(!fastp){
            return false;
        }
        fastp=fastp.next;
        if(fastp===slowp){
            return true;
        }
        slowp=slowp.next;
    }
    return false;
};
