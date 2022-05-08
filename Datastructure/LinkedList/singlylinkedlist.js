// Java does have a linkedList, JavaScript don't, So we need to make it

// Formula - 

// Prepend -> O(1) -> Insert the Element Beginning of the List
// Append  -> O(1) -> Insert the Element End of the List
// Lookup  -> O(n) -> Search for a Element in the Linked list
// Insert  -> O(n) -> Insert a Element in the Linked list
// Delete  -> O(n) -> Delete a Element from the List 

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

class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null,
      }
      this.tail = this.head;
      this.length = 1;
  }
  append(value) {
    var newEle = new Node(value); //same thing
    this.tail.next = newEle;
    this.tail = newEle;
    this.length++;
    return this;
  }
  prepend(value) {
      const newEle = {
          value: value,
          next: null,
      }
      newEle.next = this.head;
      this.head = newEle;
      this.length++;
      return this;
  }
  insert(index, value) {
      if(index >= this.length) {
          return this.append(value);
      }
      const newNode = {
          value: value,
          next: null,
      }
      const leader = this.traverSe(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      this.printList();
  }
  removeData(index) {
      if(index > this.length) {
          return "Item can't be larger that array length";
      }
      const leader = this.traverSe(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      this.printList();
  }
  reverse() {
        // If Only 1 element in the linkedList
        if (!this.head.next) {
          return this.head;
        }
        this.tail = this.head;
        let first = this.head;
        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
  }
  traverSe(index) { //we need to take the last element where we need to index it
      let counter = 0;
      let currentNode = this.head;
      while(index !== counter) {
          counter++;
          currentNode = currentNode.next;
      }
      return currentNode;
  }
  printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
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
myLinkedList.removeData(2);
console.log(myLinkedList.printList());
console.log("Reverse LinkedList--------------------->");
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));