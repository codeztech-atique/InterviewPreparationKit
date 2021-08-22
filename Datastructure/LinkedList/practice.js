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
   }
}
class SinglyLinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null
      }
      this.tail = this.head;
      this.length = 1;
   }
   prepand(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }
   append(value) {
      var newEle = new Node(value); //same thing
      this.tail.next = newEle;
      this.tail = newEle;
      this.length++;
      return this;
   }
   insert(index, value) {
      if(index >= this.length) {
         return this.append(value);
      }
      let newNode = new Node(value);
      let leaderNode = this.traverse(index-1);
      let nextNode = leaderNode.next;
      leaderNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return this.printList();
   }
   remove(index) {
      if(index > this.length) {
         return "Invalid Input!!!"
      }
      let leaderNode = this.traverse(index-1);
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
      while(currentNode!=null) {
         result.push(currentNode.value);
         currentNode = currentNode.next;
      }
      return result;
   }
}


const ll = new SinglyLinkedList(85);
ll.prepand(18);
ll.prepand(24);
ll.append(30);
ll.append(35);
ll.insert(2, 20);
console.log(ll.printList())
ll.remove(2)
console.log(ll.printList())
ll.reverse();
console.log(ll.printList())

console.log(JSON.stringify(ll));


// 85 <-> 18 <-> 24 <-> 77 <-> 79 <-> 44 <-> 80 <-> 95
// 95 <-> 80 <-> 44 <-> 79 <-> 77 <-> 24 <-> 18 <-> 85 // reverse
