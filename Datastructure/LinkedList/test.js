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
        return this;
    }

    prepand(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }
        let newNode = new Node(value);
        let leaderNode = this.traverse(index - 1);
        let nextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    remove(index) {
        if(index > this.length) {
            return "Invalid input !!!"
        }
        let leaderNode = this.traverse(index - 1);
        let unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }

    reverse() {
        this.tail = this.head;
        let first = this.head;
        let second = first.next;
        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList()
    }

    removeFromFirst() {
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        return this.printList();
    }

    removeFromLast() {
        let currentNode = this.head;
        let newTail = this.head;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return this.printList();
    }

    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        while(index != counter) {
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

const linkedListLL = new LinkedList('a');
linkedListLL.append('b');
linkedListLL.append('c');
linkedListLL.append('d');
linkedListLL.append('e');
linkedListLL.prepand('f');
linkedListLL.insert(2, 'g')

console.log("LinkedList are:", linkedListLL.printList())

console.log("Remove from the index:", linkedListLL.remove(2));
console.log("Reverse Linkedlist:", linkedListLL.reverse());
console.log("Remove from the first:", linkedListLL.removeFromFirst());
console.log("Remove from the last:", linkedListLL.removeFromLast());