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

    getCommonPrefix() {
        let str = "", char = "";
        let node = this.root;
        while(node.children.size == 1 && !node.isWordEnd) {
           char = Array.from(node.children.keys())[0];
           str += char;
           node = node.children.get(char)
        }
        return str;
    }

    printAllTheWords() {
        let word = [];
        let searchTreeDFS = (node, currentWord = '') => {
            if(node.isWordEnd) {
                word.push(currentWord);
            }
            for(const [char, currNode] of node.children.entries()) {
                searchTreeDFS(currNode, currentWord + char);
            }
        }
        searchTreeDFS(this.root);
        return word;
    }

    // autoComplete("A") → ["Atique", "Ahmed"]
    // autoComplete("At") → ["Atique"]
    // autoComplete("Ati") → ["Atique"]
    // autoComplete("Ahm") → ["Ahmed"]
    // autoComplete("Hanu") → [] (no matches)
    // autoComplete("") → ["Atique", "Ahmed"] (empty prefix = all words)

    autoComplete(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!curr.children.has(char)) return [];
            curr = curr.children.get(char);
        }
        let results = [];
        let dfs = (node, path) => {
            if (node.isWordEnd) results.push(path);
            for (let [ch, next] of node.children) {
                dfs(next, path + ch);
            }
        };
        dfs(curr, prefix);
        return results;
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
