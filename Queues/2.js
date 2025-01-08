class CircularQueue {
    constructor(size) {
      this.size = size;  // Maximum size of the queue
      this.queue = new Array(size);  // Array to store elements
      this.front = -1;  // Front pointer
      this.rear = -1;   // Rear pointer
    }
  
    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === -1;
    }
  
    // Enqueue operation (insert element into the queue)
    enqueue(value) {
      if (this.isFull()) {
        console.log("Queue is full, cannot enqueue.");
        return;
      }
      if (this.isEmpty()) {
        this.front = 0;  // Initialize front pointer when first element is added
      }
      this.rear = (this.rear + 1) % this.size;  // Circular increment of rear pointer
      this.queue[this.rear] = value;  // Insert the element
      console.log(`Enqueued: ${value}`);
    }
  
    // Dequeue operation (remove element from the queue)
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty, cannot dequeue.");
        return;
      }
      const dequeuedValue = this.queue[this.front];
      if (this.front === this.rear) {
  