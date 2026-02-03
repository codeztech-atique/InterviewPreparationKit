/*

Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/description/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]


*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(list1, list2) {
        this.list1 = list1;
        this.list2 = list2;
        this.listOfValues = [];
    }

    printList(list) {
        let currentNode = list;
        while(currentNode != null) {
            this.listOfValues.push(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    showValue() {
        return this.listOfValues;
    }
}

var mergeTwoLists = function(list1, list2) {
    let linkedList = new LinkedList(list1, list2);
    linkedList.printList(list1);
    linkedList.printList(list2);
    console.log(linkedList.showValue())
};

