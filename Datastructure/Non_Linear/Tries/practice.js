class Node {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
        this.size = 0;
    }
}
class Tries {
    constructor() {
        this.root = new Node();
    }

    insert(word, value) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!(curr.children.has(charToInsert))) {
                curr.children.set(charToInsert, new Node());
            }
            curr.size = value;
            curr = curr.children.get(charToInsert);
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
        let curr = this.root;
        while(curr.children.size == 1 && !curr.isWordEnd) {
            ch = Array.from(curr.children.keys())[0];
            str += ch;
            curr = curr.children.get(ch);
        }
        return str;
    }

    printAllTheWord() {
        let result = [];
        let dfs = (node, currWord = '') => {
            if(node.isWordEnd) {
                result.push(currWord);
            }

            for(const [ch, currNode] of node.children.entries()) {
                dfs(currNode, currWord + ch);
            }
        }
        dfs(this.root, '');
        return result;
    }

    printLeafWords() {
        let result = [];
        let dfs = (node) => {
            for(const [ch, currNode] of node.children.entries()) {
                result.push({
                    key: ch,
                    value: node.size
                })
                dfs(currNode);
            }
        }
        dfs(this.root);
        return result;
    }

    autoComplete(str) {
        let total = this.printAllTheWord();
        return total.filter((e) => {
            if(e.startsWith(str)) {
                return true;
            }
        })
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
console.log("Tries contains flow:", tries.startWithPrefix("flow"))
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