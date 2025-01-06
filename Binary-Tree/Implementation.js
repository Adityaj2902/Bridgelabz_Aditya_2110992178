class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class BinaryTree{
    constructor(value){
        this.root=null;
    }

    addNode(value){
        
        const newnode=new Node(value);

        if(!root){
          this.root=newnode;
          return ;
        }

        else{
            this.insertNode()
        }

    }
}