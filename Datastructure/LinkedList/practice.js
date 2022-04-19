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

// 4 -> 1 -> 3
// (4 is head and 3 is tail)

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 4
//     next: {
//       value: 1
//       next: {
//         value: 3
//         next: null
//       }
//     }
//   }
// };

class Node {
   constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
   }
}
class SinglyLinkedList {
   constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
   }
   prepand(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail.prev; //here
      this.tail = newNode;
      this.length++;
      return this;
   }
   append(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode; // here
      this.head = newNode;
      this.length++;
      return this;
   }
   insert(index, value) {
      if(index >= this.length) {
         return this.prepand(index);
      }
      let newNode = new Node(value);
      let leaderNode = this.traverse(index - 1);
      let unwantedNode = leaderNode.next;
      leaderNode.next = newNode;
      newNode.prev = leaderNode; // here
      newNode.next = unwantedNode;
      unwantedNode.prev = newNode; //here
      return this.printList();
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
   }
   remove(index) {
      if(index > this.length) {
         return "Invaild Input !!!"
      }
      let leader = this.traverse(index - 1);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;
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
      let currentNode = this.head;
      let result = [];
      while(currentNode !== null) {
         result.push(currentNode.value);
         currentNode = currentNode.next;
      }
      return result;
   }
}

// Singly LinkedList
// const ll = new SinglyLinkedList(85);
// ll.prepand(18);
// ll.prepand(24);
// ll.append(30);
// ll.append(35);
// ll.insert(2, 20);
// ll.insert(200, 22);
// console.log();
// console.log("Your LinkedList Are ========>");
// console.log();
// console.log(ll.printList())
// console.log();
// console.log("After Remove from LinkedList ========>");
// console.log();
// ll.remove(2);
// console.log(ll.printList())
// console.log();
// console.log("After Reverse LinkedList ========>");
// console.log();
// ll.reverse();
// console.log(ll.printList())
// console.log();
// console.log("Full LinkedList ========>");
// console.log();
// console.log(JSON.stringify(ll));
// console.log();

// Doubly LinkedList
const ll = new SinglyLinkedList(10);
ll.append(5);
ll.append(52);
ll.prepand(9);
ll.insert(200, 99); //If the index location more than length it gonna insert last
ll.insert(2, 19);
console.log(ll);
// console.log("Array--------------------->");
console.log(ll.printList());

// 85 <-> 18 <-> 24 <-> 77 <-> 79 <-> 44 <-> 80 <-> 95
// 95 <-> 80 <-> 44 <-> 79 <-> 77 <-> 24 <-> 18 <-> 85 // reverse
