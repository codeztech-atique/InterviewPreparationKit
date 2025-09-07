class Node {
    constructor(value) {
       this.value = value;
       this.next = null;
       this.random = null;
    }
 }
 
 function copyRandomList(head) {
    if (!head) {
       return null;
    }
 
    // Step 1: Duplicate each node and insert it between the original nodes.
    let current = head;
    while (current) {
       const copy = new Node(current.value);
       copy.next = current.next;
       current.next = copy;
       current = copy.next;
    }
 
    // Step 2: Assign random pointers for the copied nodes.
    current = head;
    while (current) {
       if (current.random) {
          current.next.random = current.random.next;
       }
       current = current.next.next;
    }
 
    // Step 3: Separate the original and copied nodes.
    const newHead = head.next;
    current = head;
    let newCurrent = newHead;
 
    while (current) {
       current.next = newCurrent.next;
       current = current.next;
 
       if (current) {
          newCurrent.next = current.next;
          newCurrent = newCurrent.next;
       }
    }
 
    return newHead;
 }
 
// Example usage:
const originalHead = new Node(1);
originalHead.next = new Node(2);
originalHead.next.next = new Node(3);
originalHead.next.next.next = new Node(4);
originalHead.next.random = originalHead.next.next.next;
originalHead.next.next.random = originalHead.next.next.next.next;
originalHead.next.next.next.random = originalHead.next.next;
 
const copiedHead = copyRandomList(originalHead);
 

function printListWithRandom(head) {
    const result = [];
    let current = head;
 
    while (current) {
       const node = {
          value: current.value,
          random: current.random ? current.random.value : null,
       };
       result.push(node);
       current = current.next;
    }
 
    return result;
}

// Validate the copied list
console.log("Original List:", printListWithRandom(originalHead));
console.log("Copied List:", printListWithRandom(copiedHead));
  

// Input - 

// 1 ----> 2 --- 3
// 3 ---> 4
// 4 ---> 5 ----> 6

// Output -
// Original List: [
//     { value: 1, random: null },
//     { value: 2, random: 4 },
//     { value: 3, random: null },
//     { value: 4, random: 3 }
//   ]
// Copied List: [
//     { value: 1, random: null },
//     { value: 2, random: 4 },
//     { value: 3, random: null },
//     { value: 4, random: 3 }
 