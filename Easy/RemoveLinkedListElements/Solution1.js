/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // if head is null return head
    if(!head){
        return head;
    }
    // head.val is val remove head.val
    if(head.val===val){
        head = removeElements(head.next,val);
        if(!head){
            return head;
        }
    }
    if(head.next){
        head.next = removeElements(head.next,val);
    }
    return head;
    // remove from tail and set head.next to that tail
};
