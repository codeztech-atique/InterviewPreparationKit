// Using Array


// Queue --> First in first Out

// --> Enqueue ---> Push the data in the queue ---> ()
// --> Dequeue ---> Left from the queue ---> ()
// --> 





class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(data) {
        this.arr.push(data);
        return this;
    }
    dequeue() {
        this.arr.shift();
        return this;
    }
    printList() {
        return this.arr;
    }
}

const queueArr = new Queue();
queueArr.enqueue(5);
queueArr.enqueue(16);
queueArr.enqueue(93);
queueArr.enqueue(33);
queueArr.enqueue(85);
queueArr.dequeue();
queueArr.dequeue();
console.log(queueArr.printList());