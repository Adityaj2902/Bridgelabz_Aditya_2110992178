// 1) Reverse a Linked List
// Given a linked list, reverse it and return the head of the reversed list.


var reverseList = function(head) {

    let prev=null;
    let curr= head;
    let temp=null;

    while(curr!=null){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }

    return prev;
    
};