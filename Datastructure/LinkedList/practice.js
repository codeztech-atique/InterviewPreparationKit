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
      this.random = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.random = {};
      this.length = 0;
   }

   assignValue(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
   }

  
   // Step 1 - Find the Nodes and push to array in order to from a linkedlist
   printList(linkedList) {
      let result = [];
      let currentNode = linkedList;
      while(currentNode != null) {
         result.push(currentNode.value);
         currentNode = currentNode.next;
      }
      return result;
   }

   // Step 2 - Get the value from Array and push to linkedList
   append(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   // Step 3 - Get the random pointer node - and Store in a map
   assignRandomPointer(linkedList) {
      let currentNode = linkedList;
      while (currentNode != null) {
         if (currentNode.random) {
            if (!this.random[currentNode.value]) {
               this.random[currentNode.value] = [];
            }
            this.random[currentNode.value].push(currentNode.random.value);
         }
         currentNode = currentNode.next;
      }
      return this.random;
   }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

// My linkedList - 
a.next = b;
a.next.next = c;
a.next.next.next = d;
a.next.next.next.next = e;

// My Random pointer - 
// 1 -- 2
// 1 -- 3

// 2 -- 3 
// 2 -- 4

a.random = b;
a.random = c;
a.random = d;
b.random = c;
c.random = e;
d.random = b;
e.random = d;


console.log("Your linkedlist:", a);

// Singly LinkedList

console.log();
console.log("Your LinkedList Are ========>");
console.log();

const ll = new SinglyLinkedList();
console.log(ll.printList(a))
console.log();

let linkedListElements = ll.printList(a);


// ll.head = linkedListElements[0];
// ll.tail = ll.head;

ll.assignValue(linkedListElements[0]);

// Create Linked list 
for(let i = 1; i < linkedListElements.length; i++) {
   ll.append(linkedListElements[i]);
}

console.log("Your Copy LinkedList Are ========>");
console.log();
console.log(JSON.stringify(ll.head));

console.log();
console.log(ll.assignRandomPointer(a));

// Doubly LinkedList
// const ll = new SinglyLinkedList(10);
// ll.append(5);
// ll.append(52);
// ll.prepand(9);
// ll.insert(200, 99); //If the index location more than length it gonna insert last

// ll.insert(2, 19);
// console.log(ll.printList());
// ll.remove(2);
// ll.reverse();
// // console.log("Array--------------------->");
// console.log(ll.printList());

// 85 <-> 18 <-> 24 <-> 77 <-> 79 <-> 44 <-> 80 <-> 95
// 95 <-> 80 <-> 44 <-> 79 <-> 77 <-> 24 <-> 18 <-> 85 // reverse
