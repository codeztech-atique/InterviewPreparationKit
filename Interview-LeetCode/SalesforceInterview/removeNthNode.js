/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

1 --> 2 --> 3 --> 4 --> 5

Remove 2 node from the last

1 --> 2 ---> 3 --> 5 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    remove(index) {
        let leaderNode;
        if(index == 0) {
            index = 1;
        }
        let removeNode = this.length - ( index - 1 );
        console.log("Remove node = ", removeNode);

        if(index === this.length) {
            console.log("Remove from the first:", this.length);
            this.removeFromFirst();
        } else if(removeNode === this.length && index === 1) {
            console.log("Remove from the last:", index);
            let lastNode = this.removeFromLast();
        } else {
            console.log("Remove from the middle:", index);
        }
        
        // leaderNode = this.traverse(index - 1);
        // let unwantedNode = leaderNode.next;
        // leaderNode.next = unwantedNode.next;
        
        return this.printList();
    }

    removeFromFirst() {
       let currentNode = this.head;
       this.head = currentNode.next;
       this.length--;
    }

    removeFromLast() {
        if (this.length === 0) {
            return "List is empty!";
        }
    
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return "List is empty after removing the last node!";
        }
    
        let currentNode = this.head;
        let newTail = this.head;
    
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
    
        newTail.next = null;
        this.tail = newTail;
        this.length--;
    }

    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter != index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList() {
        let result = [];
        let currentNode = this.head;
        while(currentNode != null) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

const arr = [1,2,3,4,5];

const linkedList = new LinkedList(arr[0]);


for(let i = 1; i < arr.length; i++) {
    linkedList.append(arr[i])
}

console.log("Linked list:", JSON.stringify(linkedList.head));
console.log("Actual LinkedList:", linkedList.printList());
console.log(linkedList.remove(1));
console.log("Length:", linkedList.length)
console.log("After remove:", JSON.stringify(linkedList.head));
