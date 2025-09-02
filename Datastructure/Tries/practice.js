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

    insert(word, weight) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!(curr.children.has(charToInsert))) {
                curr.children.set(charToInsert, new Node())
            }
            curr = curr.children.get(charToInsert);
            curr.weight = weight;
        }
        curr.isWordEnd = true;
        return this;
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!(curr.children.has(charToInsert))) {
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
            if(!(curr.children.has(charToInsert))) {
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
            if(!(curr.children.has(charToInsert))) {
                return false;
            }
            curr = curr.children.get(charToInsert);
        }
        curr.isWordEnd = false;
        return true;
    }

    getCommonPrefix() {
        let ch = "", str = "";
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
        let searchTree = (node, currentWord = '') => {
            if(node.isWordEnd) {
                word.push(currentWord);
            }
            for(const [ch, curr] of node.children.entries()) {
                searchTree(curr, currentWord + ch);
            }
        }
        searchTree(this.root);
        return word;
    }

    printLeafWords() {
        let word = [];
         let searchTree = (node) => {
            for(const [ch, curr] of node.children.entries()) {
                word.push({
                    key: ch,
                    value: curr.weight
                })
                searchTree(curr);
            }
        }
        searchTree(this.root);
        return word;
    }
}

const tries = new Tries();
tries.insert("flower", 5);
tries.insert("flo", 4)
tries.insert("flow", 32);
tries.insert("fltter", 3);
tries.insert("fllet", 2);
// tries.insert("hat", 6);
// tries.insert("tree", 10);


console.log("Tries contains flower:", tries.contains("flower"));
console.log("Tries contains flow:", tries.startWithPrefix("flow"))
console.log("Tries contains flight:", tries.contains("flight"));
console.log("Tries contains Suny:", tries.startWithPrefix("Suny"))

tries.remove("flight");

console.log("Tries contains flight:", tries.contains("flight"));


console.log("Tries contains Atiz:", tries.contains("Atiz"));
console.log("Common Prefix:", tries.getCommonPrefix())
console.log("Print all word:", tries.printAllTheWord())
// console.log("Pring all word with weight:", tries.getAllChacterWith_Weight())
console.log("Print leaf word:", tries.printLeafWords())