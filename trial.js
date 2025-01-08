class Stack{
    constructor(){
        this.queue1=[];
        this.queue2=[];

    }

    push(value){
        this.queue1.push(value);
    }

    pop(){

        if(this.queue1.length==0){
            throw new Error('Stack is FULL');
        }

        while(this.queue1.length()>1){
            this.queue2.push(this.queue1.shift());
        }
        
        const popElement=this.queue1.shift();
        const [queue1,queue2]=[queue2,queue1];
       
        return popElement;
    }


    topElement(){
        if(this.queue1.length==0){
            throw new Error('Stack is Empty');
        }

        while(this.queue1.length()>1){
            this.queue2.push(this.queue1.pop());
        }
        
        const popElement=this.queue1.shift();
        
        this.queue2.push(this.queue1.shift);

        const [queue1,queue2]=[queue2,queue1];
       
        return this.topElement;
    }

    }
}