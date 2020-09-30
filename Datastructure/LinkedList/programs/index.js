// Insert the Element based on the index location of the array
var arr = [33,4,55,6];
// var index = (2, 5);
// var outputarray = [33,4,5,55,6]; //Index 5th location of the array

function Main(arr) {
   var firstElement = arr[0]; 
   var myLinkedList = new LinkedList(firstElement);
   for(var i=1;i<arr.length;i++) {
     myLinkedList.append(arr[i]);
   }
   console.log(JSON.stringify(myLinkedList));
   console.log(myLinkedList.printList());
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    append(value) {
        const newNode = {
           value: value,
           next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        var leader = this.traverServal(index-1);
        var nextNode = leader.next;
        leader.next = newNode;
        newNode.next = nextNode;
        this.length++;
        this.printList();
    }
    remove(index) {
        if(index >= this.length) {
            return "Remove is not possible! invalid Input!!!";
        }
        var leader = this.traverServal(index-1);
        var removeItem = leader.next;
        leader.next = removeItem.next;
        this.length--;
        this.printList();
    } 
    traverServal(index) {
        let counter = 0;
        let currentNode = this.head;
        while(index !== counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode!==null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

// Main(arr);
var myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(52);
myLinkedList.prepend(22);
myLinkedList.append(9);
myLinkedList.insert(200, 99); //If the index location more than length it gonna insert last
myLinkedList.insert(2, 19);
console.log(JSON.stringify(myLinkedList));
console.log("Array--------------------->");
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());