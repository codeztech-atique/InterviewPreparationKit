class Node {
    constructor() {
        this.children = {};
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
            let charsToInsert = word[i];
            if(!(charsToInsert in curr.children)) {
                curr.children[charsToInsert] = new Node();
            }
            curr = curr.children[charsToInsert];
        }
        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charsToFind = word[i];
            if(!(charsToFind in curr.children)) {
                return false
            }
            curr = curr.children[charsToFind];
        }
        return curr.isWordEnd;
    }

    delete(word) {
        let wordsFound = this.contains(word);
        if(wordsFound) {
            let curr = this.root;
            console.log(JSON.stringify(curr));
        }
    }
}


const trie = new Trie(); 
trie.insert("Atique");
trie.insert("Ahmed");
trie.insert("Hanufa");
trie.insert("Hanuman");

console.log(trie.contains("Atique"));
console.log(trie.contains("Ati"));
console.log(trie.contains("Atiq"));
console.log(trie.contains("Hanufa"));


console.log(trie.contains("Atique"));
console.log(trie.contains("Ati"));
console.log(trie.contains("Atiq"));
console.log(trie.contains("Hanufa"));

trie.delete("Atique");
