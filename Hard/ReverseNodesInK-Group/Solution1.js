/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const kVals = [];
    let curr = head;
    while(kVals.length < k && curr){
       kVals.push(curr.val); 
       curr = curr.next;
    }
    if(kVals.length < k){
        return head;
    }
    curr = head;
    for(let i = kVals.length - 1; i > -1; i--){
        curr.val = kVals[i];
        curr = curr.next;
    }
    curr = reverseKGroup(curr,k);
    return head;
};
