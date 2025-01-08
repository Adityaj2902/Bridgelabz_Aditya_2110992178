class MyQueue {
    constructor() {
      this.inputStack = [];  // Stack for enqueue operations
      this.outputStack = []; // Stack for dequeue operations
    }
  
    // Enqueue operation: Push to the input stack
    enqueue(x) {
      this.inputStack.push(x);
    }
  
    // Dequeue operation: Pop from the output stack
    dequeue() {
      if (this.outputStack.length === 0) {
        // Transfer all elements from input stack to output stack
        while (this.inputStack.length > 0) {
          this.outputStack.push(this.inputStack.pop());
        }
      }
      
      if (this.outputStack.length === 0) {
        throw new Error("Queue is empty");
      }
  
      return this.outputStack.pop();
    }
  
    // Get the front element of the queue
    front() {
      if (this.outputStack.length === 0) {
        // Transfer all elements from input stack to output stack
        while (this.inputStack.length > 0) {
          this.outputStack.push(this.inputStack.pop());
        }
      }
  
      if (this.outputStack.length === 0) {
        throw new Error("Queue is empty");
      }
  
      return this.outputStack[this.outputStack.length - 1];
    }
  
    // Check if the queue is empty
    empty() {
      return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
  }
  
  // Example usage:
  const queue = new MyQueue();
  
  // Enqueue elements
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  // Dequeue elements
  console.log("Dequeue:", queue.dequeue()); // Output: 1
  
  // Front element
  console.log("Front:", queue.front());    // Output: 2
  
  // Check if the queue is empty
  console.log("Is empty?", queue.empty()); // Output: false
  
  // Dequeue remaining elements
  console.log("Dequeue:", queue.dequeue()); // Output: 2
  console.log("Dequeue:", queue.dequeue()); // Output: 3
  
  // Check if the queue is empty again
  console.log("Is empty?", queue.empty()); // Output: true
  