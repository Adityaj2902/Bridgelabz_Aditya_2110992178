// 1) Implement a Stack Using Queues
// Implement a stack using two queues. The basic operations (push, pop, top, empty) should be supported.


class Stack{
    constructor(){
        this.queue1=[];
        this.queue2=[];
    }


    push(value){
        this.queue1.push(value);
    }


    pop(){

        if(this.queue1.empty()){
            throw new Error('Queue is Empty');
        }

        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift());
        }

        const topelement=this.queue1.shift();

        const[queue1,queue2]=[queue2,queue1];

        return topelement;

    }

    top(){
        if(this.queue1.empty()){
            throw new Error('Queue is Empty');
        }

        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift());
        }

        const topelement=this.queue1.shift();


        this.queue2.push(this.queue1.shift);

        const[queue1,queue2]=[queue2,queue1];

        return topelement;
    }
}