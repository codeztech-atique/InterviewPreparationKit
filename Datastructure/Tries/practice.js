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
            let chatToInsert = word[i];
            if(!(curr.children.has(chatToInsert))) {
                curr.children.set(chatToInsert, new Node());
            }
            curr = curr.children.get(chatToInsert);
        }
        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let chatToInsert = word[i];
            if(!(curr.children.has(chatToInsert))) {
                return false;
            }
            curr = curr.children.get(chatToInsert);
        }
        return curr.isWordEnd;
    }

    startWithPrefix(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let chatToInsert = word[i];
            if(!(curr.children.has(chatToInsert))) {
                return false;
            }
            curr = curr.children.get(chatToInsert);
        }
        return true;
    }

    remove(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(curr.children.has(charToInsert)) {
                curr = curr.children.get(charToInsert);
            } else {
                return false;
            }
        }
        curr.isWordEnd = false
        return true;
    }

    printAllTheWords() {
        const words = [];

        const traverse = (node, currentWord = '') => {
            if (node.isWordEnd) {
                words.push(currentWord);
            }

            for (const [char, childNode] of node.children.entries()) {
                traverse(childNode, currentWord + char);
            }
        };

        traverse(this.root);

        return words;
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
console.log("Starts with Ati:", trie.startWithPrefix("Ati"));
console.log("Starts with Ahm:", trie.startWithPrefix("Ahm"));
console.log("Starts with Atiq:", trie.startWithPrefix("Atiq"));
console.log("Starts with Hanu:", trie.startWithPrefix("Hanu"));
console.log("Starts with GHY:", trie.contains("GHY"));

trie.remove("Atique");

console.log();

console.log("Trie Contains after remove Atique:", trie.contains("Atique"));

console.log()
console.log(trie.printAllTheWords())
