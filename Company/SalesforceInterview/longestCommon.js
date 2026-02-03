// Find Longest common prefix

// https://leetcode.com/problems/longest-common-prefix/

/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

{
    "f": 1
    "l": 1
}

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

// Solution using tries data structure


class Node {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}

class Tries {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!(curr.children.has(charToInsert))) {
                curr.children.set(charToInsert, new Node());
            }
            curr = curr.children.get(charToInsert);
        }
        curr.isWordEnd = true;
    }

    getCommonPrefix() {
        let char = '', str = '';
        let curr = this.root;
        while(curr.children.size == 1 && !curr.isWordEnd) {
            char = Array.from(curr.children.keys())[0];
            str += char;
            curr = curr.children.get(char);
        }
        return str;
    }

    printList() {
        let words = [];
        let searchTree = (node, currentWord = '') => {
            if(node.isWordEnd) {
                words.push(currentWord);
            }
            for(const [char, currNode] of node.children.entries()) {
                searchTree(currNode, currentWord + char);
            }
        }
        searchTree(this.root);
        return words;
    }
}

const arr = ["flower","flow","flight"];
const tries = new Tries();

for(let i = 0; i < arr.length; i++) {
    tries.insert(arr[i]);
}

console.log("Tries:", tries.printList())
console.log("Tries contains:", tries.root.children);
console.log("Common prefix:", tries.getCommonPrefix())
