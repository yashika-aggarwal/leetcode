/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// create a Node
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    } 
}
// create a Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(element) {
        var node = new ListNode(element);
        if (!this.head) {
            this.head = node;
            return this.head;
        }
        var tail = this.head;
            
            while(tail.next != null) {
               tail = tail.next;
            }
           tail.next = node;
         return this.head;
    }
}
 
var mergeTwoLists = function(list1, list2) {
     var mergedList = new LinkedList();
    // iterate on the list
    if(list1==null) {
      return list2; // add into mergedlist
    }
    else if(list2==null) {
        return list1; // add into mergedlist
    } 
    else {
        while(list1!=null || list2!=null) { 
       // comapare elements of the lists
            if(list1!=null && list2!=null) {
                if(list1.val>list2.val) {
           mergedList.add(list2.val);
            list2=list2.next;
        }
        else if(list2!=null && list1.val==list2.val){
             mergedList.add(list1.val);
             mergedList.add(list1.val);
            list1 = list1.next;
            list2=list2.next;
        }
         else {
            mergedList.add(list1.val);
            list1=list1.next;
         } 
            }   
            else if(list1!=null) {
                 mergedList.add(list1.val);
            list1=list1.next;
            }
            else {
                 mergedList.add(list2.val);
            list2=list2.next;
            }
   }
        return mergedList.head; 

    }
       
   
       
 
};
