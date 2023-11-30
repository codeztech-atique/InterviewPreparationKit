class Node {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}

class Trie {
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
            if(curr.children.has(charToInsert)) {
                curr = curr.children.get(charToInsert);
            }
        }
        curr.isWordEnd = false;
        return true;
    }

    printAllTheWords() {
       const words = [];
       let searchTree = (node, currentWord = '') => {
            if(node.isWordEnd) {
                words.push(currentWord)
            }
            for(const [char, currNode] of node.children.entries()) {
                searchTree(currNode, currentWord + char);
            }
       }
       searchTree(this.root);
       return words;
    }

    printAllTheWordsINMap() {
      return [...this.root.children.entries()]
    }
}



const root = new Node();
const trie = new Trie(); 

trie.insert("Atique");
trie.insert("Ahmed");
trie.insert("Hanufa");
trie.insert("Hanuman");

console.log("Trie Contains Atique:", trie.contains("Atique"));
console.log("Trie Contains Ahmed:", trie.contains("Ahmed"));
console.log("Trie Contains Ati:", trie.contains("Ati"));
console.log("Trie Contains Atiq:",trie.contains("Atiq"));
console.log("Trie Contains Hanufa:", trie.contains("Hanufa"));
console.log("Trie Contains GHY:", trie.contains("GHY"));

console.log();

console.log("Starts with Atique:", trie.startWithPrefix("Atique"));
console.log("Starts with Ahmed:", trie.startWithPrefix("Ahmed"));
console.log("Starts with Hanu:", trie.startWithPrefix("Hanufa"));
console.log("Starts with Ati:", trie.startWithPrefix("Ati"));
console.log("Starts with Ahm:", trie.startWithPrefix("Ahm"));
console.log("Starts with Atiq:", trie.startWithPrefix("Atiq"));
console.log("Starts with Hanu:", trie.startWithPrefix("Hanu"));
console.log("Starts with GHY:", trie.contains("GHY"));

trie.remove("Atique");

console.log();

console.log("Trie Contains after remove Atique:", trie.contains("Atique"));

console.log(trie.printAllTheWords())
console.log("Tries Contains keys:", trie.printAllTheWordsINMap())
