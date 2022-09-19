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
      this.next = null;
      this.prev = null;
   }
}
class SinglyLinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null,
         prev: null
      }
      this.tail = this.head;
      this.length = 1;
   }

   prepand(value) { // Insert at the beginning
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode; // Doubly LinkedList
      this.head = newNode;
      this.length++;
      return this;
   }
   
   append(value) { // Insert at the last
      let newNode = new Node(value);
      newNode.prev = this.tail; // Doubly LinkedList
      this.tail.next = newNode;
      this.tail = newNode;
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
      newNode.prev = leaderNode; // Doubly LinkedList
      newNode.next = nextNode;
      nextNode.prev = newNode; // Doubly LinkedList
      this.length++;
      return this.printList();
   }

   remove(index) {
      if(index > this.length) {
         return "Invalid Input !!!"
      }

      let leaderNode = this.traverse(index - 1);
      let unwantedNode = leaderNode.next;
      leaderNode.next = unwantedNode.next;
      this.length--;
      return this.printList(); 
   }

   reverse() {
      if(!this.head.next) {
         return this.head;
      }
      
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
      return this.printList();
   }

   traverse(index) {
      let currentNode = this.head;
      let counter = 0;
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



// Singly LinkedList
const ll = new SinglyLinkedList(85);
ll.prepand(18);
ll.prepand(24);
ll.append(30);
ll.append(35);
ll.insert(2, 20);
ll.insert(200, 22);
console.log();
console.log("Your LinkedList Are ========>");
console.log();
console.log(ll.printList())
console.log();
console.log("After Remove from LinkedList ========>");
console.log();
ll.remove(2);
console.log(ll.printList())
console.log();
console.log("After Reverse LinkedList ========>");
console.log();
ll.reverse();
console.log(ll.printList())
console.log();
console.log("Full LinkedList ========>");
console.log();
console.log(JSON.stringify(ll));
console.log();

// Doubly LinkedList
// const ll = new SinglyLinkedList(10);
// ll.append(5);
// ll.append(52);
// ll.prepand(9);
// ll.insert(200, 99); //If the index location more than length it gonna insert last
// ll.insert(2, 19);
// console.log(ll);
// ll.remove(2);
// ll.reverse();
// // console.log("Array--------------------->");
// console.log(ll.printList());

// 85 <-> 18 <-> 24 <-> 77 <-> 79 <-> 44 <-> 80 <-> 95
// 95 <-> 80 <-> 44 <-> 79 <-> 77 <-> 24 <-> 18 <-> 85 // reverse
