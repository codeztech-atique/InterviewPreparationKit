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
            if(!curr.children.has(charToInsert)) {
                curr.children.set(charToInsert, new Node());
            }
            curr.weight = 5;
            curr = curr.children.get(charToInsert);
        }
        curr.isWordEnd = true;
        curr.weight = 5;
        return this;
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!curr.children.has(charToInsert)) {
                return false;
            }
            curr = curr.children.get(charToInsert);
        }
        return curr.isWordEnd;
    }

    startWithPrefix(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!curr.children.has(charToInsert)) {
                return false;
            }
            curr = curr.children.get(charToInsert);
        }
        return true;
    }

    remove(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!curr.children.has(charToInsert)) {
                return false;
            }
            curr = curr.children.get(charToInsert);
        }
        curr.isWordEnd = false;
        return true;
    } 

    getCommonPrefix() {
        let str = "", ch = "";
        let node = this.root;
        while(node.children.size == 1 && !node.isWordEnd) {
            ch = Array.from(node.children.keys())[0];
            str += ch;
            node = node.children.get(ch);
        }
        return str;
    }

    printAllTheWord() {
        let word = [];
        let searchTreeDFS = (node, currentWord = "") => {
            if(node.isWordEnd) {
                word.push(currentWord);
            }
            for(const [ch, currNode] of node.children.entries()) {
                searchTreeDFS(currNode, currentWord + ch);
            }
        }
        searchTreeDFS(this.root);
        return word;
    }

    printLeafWords() {
        let res = [];
        let searchTree = (node) => {
            for(const [ch, currNode] of node.children.entries()) {
                res.push({
                    key: ch,
                    weight: currNode.weight
                });
                searchTree(currNode);
            }
        }
        searchTree(this.root);
        return res;
    }

    autoComplete(word) {
        let totalWord = this.printAllTheWord();
        return totalWord.filter((e) => {
            if(e.startsWith(word)) {
                return true;
            }
        });
    }
}

const tries = new Tries();
tries.insert("flower", 5);
tries.insert("flo", 4)
tries.insert("flow", 22);
tries.insert("fltter", 3);
tries.insert("fllet", 2);
tries.insert("flight", 33);
// tries.insert("hat", 6);
// tries.insert("tree", 10);


console.log("Tries contains flower:", tries.contains("flower"));
console.log("Tries contains flow:", tries.startWithPrefix("fl"))
console.log("Tries contains flight:", tries.contains("flight"));
console.log("Tries contains Suny:", tries.startWithPrefix("Suny"))

tries.remove("flight");

console.log("After Remove - Tries contains flight:", tries.contains("flight"));


console.log("Tries contains Atiz:", tries.contains("Atiz"));
console.log("Common Prefix:", tries.getCommonPrefix())
console.log("Print all word:", tries.printAllTheWord())
// console.log("Pring all word with weight:", tries.getAllChacterWith_Weight())
console.log("Print leaf word:", tries.printLeafWords())
console.log("Auto complete:", tries.autoComplete("fl"))