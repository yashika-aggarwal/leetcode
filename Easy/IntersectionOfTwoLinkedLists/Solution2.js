/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0;
    let lenB = 0;
    let pA = headA;
    let pB = headB;
    while(pA||pB){
        if(pA){
            pA = pA.next;
            lenA++
        }
        if(pB){
            pB = pB.next;
            lenB++;
        }
    }
    pA = headA;
    pB = headB;
    while(lenA>lenB){
        pA = pA.next;
        lenA--;
    }
    while(lenB>lenA){
        pB = pB.next;
        lenB--;
    }
    while(pA && pB){
        if(pA===pB){
            return pA;
        }
        pA = pA.next;
        pB = pB.next;
    }
};
