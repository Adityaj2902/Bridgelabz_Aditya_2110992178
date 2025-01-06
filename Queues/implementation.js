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
        return this.items.shift();
    }

    peek() {
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
    print() {
        console.log(this.items.join(' '));
    }
}


let queue = new Queue();

queue.enqueue(10);  // Queue: 10
queue.enqueue(20);  // Queue: 10 20
queue.enqueue(30);  // Queue: 10 20 30

console.log(queue.peek());  // Output: 10 (front element)
console.log(queue.size());  // Output: 3 (number of elements)
console.log(queue.isEmpty());  // Output: false (queue is not empty)

queue.dequeue();  // Removes 10, Queue: 20 30
queue.print();  // Output: 20 30

queue.dequeue();  // Removes 20, Queue: 30
queue.dequeue();  // Removes 30, Queue: (empty)
console.log(queue.isEmpty());  // Output: true (queue is empty)
