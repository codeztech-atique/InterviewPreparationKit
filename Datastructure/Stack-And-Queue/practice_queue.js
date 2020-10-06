
// Using Array
class QueueArray {
   constructor() {
       this.array = [];
   }
   enqueue(value) {
       this.array.push(value);
       return this;
   }
   dequeue() {
       this.array.shift();
       return this;
   }
   printData() {
       console.log(this.array);
   }
}

var queueData1 = new QueueArray();
queueData1.enqueue(12);
queueData1.enqueue(11);
queueData1.enqueue(10);
queueData1.printData();
queueData1.dequeue();

queueData1.printData();



class QueueObject {
    constructor() {
        this.obj = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(value) {
        this.obj[this.tail++] = value;
        return this;
    }
    dequeue() {
        delete this.obj[this.head];
        this.head++;
        return this;
    }
    printData() {
        console.log(this.obj);
    }
 }

 var queueData2 = new QueueObject();
queueData2.enqueue("Hello");
queueData2.enqueue("Hey");
queueData2.enqueue("How are you?");
queueData2.printData();
queueData2.dequeue();
queueData2.dequeue();
queueData2.printData();