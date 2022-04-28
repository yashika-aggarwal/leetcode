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
    // if head is null return false
    if(!head){
       return false;
    }
    // else def a hashtable
   var nodes= new Set();
    // until head is not null iterate
    while(head){
        // if the node is already in the dict return true
        if(nodes.has(head)){
            return true;
        }
        // else not push it in dict 
        else{
            nodes.add(head);
            head = head.next;
        }
        
            // assign head to head.next
    }
    return false;
};
