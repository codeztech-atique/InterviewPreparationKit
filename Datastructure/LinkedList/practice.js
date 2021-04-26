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

class LinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null
      };
      this.tail = this.head;
      this.count = 1;
   }
   prepand(value) { // Inserting elements beginning of the LinkedList
      let newNode = {
         value: value,
         next: null
      };
      newNode.next = this.head;
      this.head = newNode;
      this.count++;
      return this;
   }
   append(value) {
      let newNode = {
         value: value,
         next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.count++;
      return this;
   }
   insert(index, value) {
      if(index >= this.count) {
         return this.append(value);
      }
      this.count++;
      let newNode = {
         value: value,
         next: null
      };
      let leader = this.traverse(index-1);
      let nextNode = leader.next;
      leader.next = newNode;
      newNode.next = nextNode;
      return this.printList();
   }
   traverse(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter!=index) {
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
   remove(index) {
      if(index > this.count) {
         return "Invalid Input !!!"
      }
      let leader = this.traverse(index-1);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.count--;
      return this.printList();
   }
   reverse() {
      if(!this.head.next) { // this.count === 1
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
}

const ll = new LinkedList(44);
ll.prepand(79);
ll.prepand(77);
ll.prepand(24);
ll.prepand(33);
ll.prepand(18);
ll.prepand(85);
ll.append(80);
ll.insert(2, 90);
ll.insert(200, 95);
ll.remove(3);
console.log(JSON.stringify(ll));
console.log(ll.printList());
console.log(ll.reverse());

// 85 -> 18 -> 24 -> 77 -> 79 -> 44 -> 80 -> 95
// 95 -> 80 -> 44 -> 79 -> 77 -> 24 -> 18 -> 85 // reverse
