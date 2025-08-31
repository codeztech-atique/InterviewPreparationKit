// Singly Linked List with optional circular mode (tail -> head)

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
    this.circular = false; // ring toggle
  }

  // ===== Ring controls =====
  makeCircular() {
    if (this.length > 0) {
      this.tail.next = this.head;
      this.circular = true;
    }
    return this;
  }

  breakCircular() {
    if (this.circular && this.tail) {
      this.tail.next = null;
      this.circular = false;
    }
    return this;
  }

  // ===== Helpers =====
  printList() {
    const out = [];
    let curr = this.head;
    let seen = 0;
    while (curr && seen < this.length) {
      out.push(curr.value);
      curr = curr.next;
      seen++;
    }
    return out;
  }

  traverse(index) {
    if (this.length === 0) return null;
    if (index < 0) throw new Error("Negative index not supported");
    let steps = this.circular ? (index % this.length) : index;
    let curr = this.head;
    while (steps-- > 0 && curr) curr = curr.next;
    return curr;
  }

  // ===== Core ops =====
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) this.tail = newNode;
    if (this.circular && this.tail) this.tail.next = this.head;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = newNode;
      this.length = 1;
      if (this.circular) this.tail.next = this.head;
      return this;
    }
    if (this.circular) {
      newNode.next = this.head; // ring must point back to head
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    if (leader === this.tail) this.tail = newNode;
    this.length++;
    return this.printList();
  }

  removeFirst() {
    if (this.length === 0) return this;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.circular = false;
      this.length = 0;
      return this;
    }
    this.head = this.head.next;
    if (this.circular && this.tail) this.tail.next = this.head;
    this.length--;
    return this;
  }

  removeLast() {
    if (this.length === 0) return this;
    if (this.length === 1) return this.removeFirst();

    let prev = null;
    let curr = this.head;

    if (this.circular) {
      while (curr.next !== this.head) {
        prev = curr;
        curr = curr.next;
      }
      // curr is tail
      prev.next = this.head;
      this.tail = prev;
    } else {
      while (curr.next && curr.next !== this.tail) {
        curr = curr.next;
      }
      // curr is node before tail (or head if length==2)
      prev = curr;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    return this;
  }

  remove(index) {
    if (this.length === 0) return this.printList();
    const norm = this.circular ? (index % this.length) : index;
    if (norm < 0 || norm >= this.length) return this.printList();

    if (norm === 0) {
      this.removeFirst();
      return this.printList();
    }
    if (norm === this.length - 1) {
      this.removeLast();
      return this.printList();
    }

    const leader = this.traverse(norm - 1);
    const unwanted = leader.next;
    leader.next = unwanted.next;
    if (unwanted === this.tail) this.tail = leader;
    if (this.circular && this.tail) this.tail.next = this.head;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (this.length <= 1) return this.printList();

    const wasCircular = this.circular;
    if (wasCircular) this.breakCircular();

    let prev = null;
    let curr = this.head;
    this.tail = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;

    if (wasCircular) this.makeCircular();
    return this.printList();
  }

  // Floyd's Tortoise & Hare
  isCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
}

// ===== Example usage =====
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(52);
myLinkedList.prepend(9);
myLinkedList.insert(200, 99); // If index >= length, append
myLinkedList.insert(2, 19);
myLinkedList.insert(6, 19);

console.log("Linear list:", myLinkedList.printList());        // [9,10,19,5,52,99,19]
console.log("Is cycle:", myLinkedList.isCycle());             // false

// Make it circular
myLinkedList.makeCircular();
console.log("Made circular. Is cycle now?:", myLinkedList.isCycle()); // true
console.log("Safe print (length-limited):", myLinkedList.printList());

// Keep working while circular
myLinkedList.append(777);
console.log("After append (still circular):", myLinkedList.printList());

// Break the circle if you want linear-friendly ops / debugging
myLinkedList.breakCircular();
console.log("Broke circular. Is cycle?:", myLinkedList.isCycle()); // false

myLinkedList.remove(2);
myLinkedList.removeFirst();
myLinkedList.removeLast();

console.log("After removals:", myLinkedList.printList());
console.log("Reversed:", myLinkedList.reverse());
console.log("Final:", myLinkedList.printList());

// NOTE: Avoid JSON.stringify(list) while in circular mode (it will throw due to cyclic refs).
