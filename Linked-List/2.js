// 2) Detect a Cycle in a Linked List
// Given a linked list, determine if it has a cycle in it.


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;  
        slow = slow.next;      

        if (slow === fast) {    
            return true;
        }
    }

    return false; 
};
