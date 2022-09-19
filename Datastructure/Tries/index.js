// This is Tries in Data Structure 

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
            if(!(charToInsert in curr.children)) { // For object
                curr.children[charToInsert] = new Node();
            }
            curr = curr.children[charToInsert];
        }
        curr.isWordEnd = true;
        return this;
    }

    contains(word) { // Returns all the words with given prefix.
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if(!(charToFind in curr.children)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return curr.isWordEnd;
    }

    startWithPrefix(prefix) { // Checks if Trie starts with that words
        let curr = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if(!(charToFind in curr.children)) {     
                return false;
            }
            curr = curr.children[charToFind];
        }
        return true;
    }

    remove(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFindAndDelete = word[i];
            if((charToFindAndDelete in curr.children)) {
                curr = curr.children[charToFindAndDelete];
            } else {
                return false;
            }
        }
        // Delete from Trie - means set WordEnd value as false
        curr.isWordEnd = false;
        return true;
    }
}


const root = new Node();
const trie = new Trie(); 

trie.insert("Atique");
trie.insert("Ahmed");
// trie.insert("Hanufa");
// trie.insert("Hanuman");

console.log("Trie Contains:", trie.contains("Atique"));
console.log("Trie Contains:", trie.contains("Ati"));
console.log("Trie Contains:",trie.contains("Atiq"));
console.log("Trie Contains:", trie.contains("Hanufa"));


console.log("Starts with:", trie.startWithPrefix("Atique"));
console.log("Starts with:", trie.startWithPrefix("Ati"));
console.log("Starts with:", trie.startWithPrefix("Atiq"));
console.log("Starts with:", trie.startWithPrefix("XX"));

trie.remove("Atique");
console.log("Trie Contains after remove Atique:", trie.contains("Atique"));
