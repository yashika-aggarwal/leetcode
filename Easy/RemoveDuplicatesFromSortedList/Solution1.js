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
// create a Linked list
class LinkedList {
    constructor(){
        this.head = null;
    }
        add(element){
            var node = new ListNode(element);
            if(!this.head){
                this.head = node;
                return this.head;
            }
          var tail = this.head;
            while(tail.next!=null){
                tail= tail.next;
            }
                tail.next = node;
                return this.head;
        }
    }

var deleteDuplicates = function(head) {
    if(head === null){
        return head;
    }
       var linkedList = new LinkedList();
        linkedList.add(head.val);
    //iterate on head
    while(head.next!==null){
    // store the current val
        currVal = head.val
        head = head.next;
   // check if the next val is dublicate to the curr val
        if(currVal !== head.val){
            linkedList.add(head.val);        
        }
    }
    return linkedList.head;
};