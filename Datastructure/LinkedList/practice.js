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

   prepend(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   append(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   insert(index, value) {
      if(index >= this.length) {
         return this.prepend(value);
      }
      let newNode = new Node(value);
      let leader = this.traverse(index - 1);
      let nextNode = leader.next;
      leader.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return this.printList();
   }

   remove(index) {
      if(index > this.length) {
         return "Invalid Index !!!"
      }
      let leader = this.traverse(index - 1);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
   }

   removeFirst() {
      if(this.length == 0) {
         return "List is Empty"
      }
      let unwantedNode = this.head;
      this.head = unwantedNode.next;
      this.length--;

      return this;
   }

   removeLast() {
      if(this.length == 0) {
         return "List Empty !!!"
      }
      let curr = this.head;
      let newTail = this.head;
      while(curr.next) {
         newTail = curr;
         curr = curr.next;
      }
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return this;
   }

   traverse(index) {
      let counter = 0;
      let curr = this.head;
      while(index != counter) {
         counter++;
         curr = curr.next;
      }
      return curr;
   }

   printList() {
      let result = [];
      let curr = this.head;
      while(curr != null) {
         result.push(curr.value);
         curr = curr.next;
      }
      return result;
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
myLinkedList.remove(2);
console.log(myLinkedList.printList());

myLinkedList.removeFirst();

myLinkedList.removeLast();

console.log(myLinkedList.printList());
// console.log("Reverse LinkedList--------------------->");
// myLinkedList.reverse();

console.log(JSON.stringify(myLinkedList));