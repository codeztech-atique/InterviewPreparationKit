/*

Merge k Sorted Lists - https://leetcode.com/problems/merge-k-sorted-lists/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []


*/



class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(linkedLists) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        console.log(linkedLists, "sdfasdf")
        this.linkedLists = linkedLists;
        this.linkedListsValue = [];
        console.log("This linkedlist:", this.linkedLists.length)
    }

    printList() {
        let currentNode = this.linkedLists[0];
        console.log("CurrentNode:", currentNode)
        while(currentNode != null) {
            this.linkedListsValue.push(currentNode.val);
            currentNode = currentNode.next;
        }

        if(this.linkedLists.length > 0) {
            this.linkedLists.shift()
            this.printList();
        }
        this.linkedListsValue = this.linkedListsValue.sort((a, b) => a - b);
        return this.linkedListsValue;
    }

    createLinkedList(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
       let newNode = new Node(value);
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
    }
}

var mergeKLists = function(lists) {
    let linkedList = new LinkedList(lists);
    let linkedListValues = linkedList.printList();
    console.log(linkedListValues, " --  hEre ==")
    if(linkedListValues.length > 0) {
        linkedList.createLinkedList(linkedListValues[0]);
        console.log(linkedList.head, " --  head ==")

        for(let i = 1; i < linkedListValues.length; i++) {
            linkedList.append(linkedListValues[i]);
        }
        console.log(linkedList.head, " --  head 22 ==")
        return linkedList.head;
    } else {
        return null;
    }
};

mergeKLists([[1,4,5],[1,3,4],[2,6]])