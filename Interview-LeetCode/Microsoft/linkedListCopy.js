class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
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

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index > this.length || index < 0) {
            return "Invalid Index !!!";
        }
        if (index === 0) {
            return this.prepend(value);
        }
        if (index === this.length) {
            return this.append(value);
        }
        let newNode = new Node(value);
        let leaderNode = this.traverse(index - 1);
        let nextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this.printMap();
    }

    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printMap() {
        let result = new Map();
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next) {
                if (result.has(currentNode.value)) {
                    result.get(currentNode.value).push(currentNode.next.value);
                } else {
                    result.set(currentNode.value, [currentNode.next.value]);
                }
            }
            currentNode = currentNode.next;
        }
        return result;
    }
}

const linkedList = new LinkedList(5);
linkedList.append(6);
linkedList.append(9);
linkedList.insert(1, 7); // Inserting 7 at index 1

console.log(linkedList.printMap());
