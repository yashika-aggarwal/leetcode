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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let right = head.next.next;
    let leftVal = head.val;
    head.val = head.next.val;
    head.next.val = leftVal;
    head.next.next = swapPairs(right); 
    return head;
};
