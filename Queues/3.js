// Queue implementation using an array
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Remove from the front
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(" "));
    }
}

// Function to reverse the queue using a stack
function reverseQueue(queue) {
    let stack = [];
    
    // Step 1: Dequeue all elements and push them onto the stack
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    // Step 2: Pop elements from the stack and enqueue them back to the queue
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
}

// Example usage:
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log("Original Queue:");
q.printQueue();

reverseQueue(q);

console.log("Reversed Queue:");
q.printQueue();
