// Java does have a linkedList, JavaScript don't, So we need to make it

// Formula - 

// Time Complexity

// Prepend -> O(1) -> Find the Element Beginning of the Linked List
// Append  -> O(1) -> Find the Element End of the Linked List
// Lookup  -> O(n) -> Search for a Element in the Linked list
// Insert  -> O(n) -> Insert a Element in the Linked list
// Delete  -> O(n) -> Delete a Element from the List 

// Space Complexity

// Space  -> O(n)

// 10->5->16     (10 is head and 16 is tail)

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

// 4 -> 1 -> 3 -> 6-> 82

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
        let newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    append(value) {
        let newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        this.length++;
        if(index >= this.length) {
            return this.append(value);
        }
        let newNode = {
           value: value,
           next: null
        };
        let leader = this.traverse(index-1);
        let nextNode = leader.next;
        leader.next = newNode;
        newNode.next = nextNode;
        return this.printList();
    }
    remove(index) {
        if(index > this.length) {
            return "Invalid Input!";
        }
        let leader = this.traverse(index-1);
        let removeNode = leader.next;
        leader.next = removeNode.next;
        return this.printList();
    }
    reverse() {
        if(!this.head.next) {
            return this.head;
        }
        let first = this.head;
        let tail = this.head;
        let second = first.next;
        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        while(index !== counter) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    printList() {
       let result = [];
       let currentNode = this.head;
       while(currentNode!==null) {
         result.push(currentNode.value);  
         currentNode = currentNode.next;
       }
       return result;
    }
}

var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(52);
myLinkedList.prepend(9);
myLinkedList.insert(200, 99); //If the index location more than length it gonna insert last
myLinkedList.insert(2, 19);
console.log(JSON.stringify(myLinkedList));
console.log("Array--------------------->");
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log("Array Remove--------------------->");
console.log(myLinkedList.printList());
console.log("Reverse LinkedList--------------------->");
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));
console.log(myLinkedList.printList());
