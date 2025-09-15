class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

class Copy_LinkedList {
    copyRandomLinkedList(head) {
        if(!this.head) {
            return null;
        }

        // Step 1 - Copy all the nodes to a new node
        let current = head;
        while(current) {
            const copy = new Node(current.value);
            copy.next = current.next;
            current.next = copy;
            current = copy.next;
        }

        // Step 2 - Copy the random pointer
        current = head;
        while(current) {
           if(current.random) {
              current.next.random = current.random.next;
           }
           current = current.next.next;
        }

        // Step 3 - Separated Original and Copied Node
        const newHead = head.next;
        current = head;
        newCurrent = newHead;
        while(current) {
            current.next = newHead.next;
            current = current.next;
            if(current) {
                newHead.next = current.next;
                newHead = newHead.next
            }
        }
    }
}


// Example usage : - 

const originalHead = new Node(1);
originalHead.next = new Node(2);
originalHead.next.next = new Node(3);
originalHead.next.next.next = new Node(4);

// Random
originalHead.next.random = originalHead.next.next.next;
originalHead.next.next.random = originalHead.next.next.next.next;
originalHead.next.next.next.random = originalHead.next.next;