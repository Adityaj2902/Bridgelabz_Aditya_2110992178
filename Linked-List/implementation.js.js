class Node{

    constructor(){
        this.head=head;
        this.next=null;
    }
}

class LinkedList{
 
    constructor(){
        this.head=null;
    }


    addFirst(data){
        const newnode= new Node(data);
        newnode.next=this.head;
        this.head=newnode;
    }

    addLast(data){
        const newnode=new Node(data);

        if(!this.head){
            this.head=newnode;
            return ;
        }

        let curr=this.head;

        while(curr.next){
            curr=curr.next;
        }

        curr.next=newnode;
    }

}


