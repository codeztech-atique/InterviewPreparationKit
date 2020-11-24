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

// 4 -> 1 -> 3 -> 6-> 82

class LinkedList {
    
}

var myLinkedList = new LinkedList(10);
for(var i = 1;i< 10;i++) {
    myLinkedList.append(i);
}
// myLinkedList.append(5);
// myLinkedList.append(52);
myLinkedList.prepend(9);
myLinkedList.insert(200, 99); //If the index location more than length it gonna insert last
myLinkedList.insert(2, 19);
console.log(JSON.stringify(myLinkedList));
console.log("Array--------------------->");
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log("Array Remove--------------------->");
console.log(myLinkedList.printList());
console.log("Reverse LinkedList--------------------->");
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));
console.log(myLinkedList.printList());
