// Queue act as a FIFO. First In and First Out. Like a printer. Real time people are wating for bus standing in a Queue.

// In Queue there are only 2 methods.

// 1) Enqueue - Javascript - Push to the last of the array
// 2) Dequeue - Javascript - Shift from the beginning of the array

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
       this.storage[this.tail++] = element;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
} 

const queue = new Queue();

queue.enqueue("Dolphin");
queue.enqueue("Shark");
queue.enqueue("Bail");


console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);