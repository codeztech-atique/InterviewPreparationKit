// This is Tries in Data Structure using object

// Visualization -  https://www.cs.usfca.edu/~galles/visualization/Trie.html
// Video - https://www.youtube.com/watch?v=Sc80DNJfQs0


// Methods to do 

// Node -> 1st Class
// Trie -> 2nd Class
//   - Insert -> Word
//   - Contains -> Word
//   - StartsWithPrefix 

// OPERATION	AVERAGE CASE	WORST CASE	BEST CASE
// Insertion	    O(N)	        O(N)       O(N)
// Deletion	O(N)	O(N)	        O(N)       O(N)
// Searching	    O(N)	        O(N)       O(N)


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
            if(!curr.children.has(charToInsert)) {
                curr.children.set(charToInsert, new Node())
            }
            curr = curr.children.get(charToInsert);
        }
        curr.isWordEnd = true;
        return this;
    }

    contains(word) { // Returns all the words with given prefix.
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if(!curr.children.has(charToFind)) {
                return false;
            }
            curr = curr.children.get(charToFind);
        }
        return curr.isWordEnd;
    }

    startWithPrefix(prefix) { // Checks if Trie starts with that words
        let curr = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if(!curr.children.has(charToFind)) {
                return false;
            }
            curr = curr.children.get(charToFind);
        }
        return true;
    }

    remove(word) { // We only setup isWordEnd as false
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFindAndDelete = word[i];
            if(curr.children.has(charToFindAndDelete)) {
                curr = curr.children.get(charToFindAndDelete);
            } else {
                return false;
            }
        }
        // Delete from Trie - means set WordEnd value as false
        curr.isWordEnd = false;
        return true;
    }

    printAllTheWords() {
        let words = [];
        let curr = this.root;

        let searchTree = (node, str) => {
            for(const entry of node.children.entries()) {
                let char = entry[0];
                node = entry[1];
               
                if (node.isWordEnd) {
                  words.push(str.concat(char));
                }
                searchTree(node, str.concat(char));
            }
        }
        searchTree(curr, ""); // initial search calling
        return words;
    }
}


const root = new Node();
const trie = new Trie(); 

trie.insert("Atique");
trie.insert("Ahmed");
// trie.insert("Hanufa");
// trie.insert("Hanuman");

console.log("Trie Contains Atique:", trie.contains("Atique"));
console.log("Trie Contains Ahmed:", trie.contains("Ahmed"));
console.log("Trie Contains Ati:", trie.contains("Ati"));
console.log("Trie Contains Atiq:",trie.contains("Atiq"));
console.log("Trie Contains Hanufa:", trie.contains("Hanufa"));

console.log();

console.log("Starts with Atique:", trie.startWithPrefix("Atique"));
console.log("Starts with Ati:", trie.startWithPrefix("Ati"));
console.log("Starts with Ahm:", trie.startWithPrefix("Ahm"));
console.log("Starts with Atiq:", trie.startWithPrefix("Atiq"));
console.log("Starts with Hanu:", trie.startWithPrefix("Hanu"));

// trie.remove("Atique");

console.log();

console.log("Trie Contains after remove Atique:", trie.contains("Atique"));

console.log()
console.log(trie.printAllTheWords())
