// HASH TABLE

// Get Item, Set Item, Delete Item, Search Item

// Insert O(1)
// Lookup O(1)
// Delete O(1)
// Space O(n)

class HashTable {
  constructor() {
    this.bucket = {};
  }
  insert(key, value) { // O(1)
    this.bucket[key] = value;
    return this;
  }
  search(key) { // O(1)
    for(let data in this.bucket) {
      if(data === key) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    var isFound = false;
    for(let data in this.bucket) {
      if(data === key) {
        isFound = true;
        delete this.bucket[key];
      }
    }
    if(isFound) {
      return "Item Deleted!!";
    } else {
      return "Item Not Found!!"
    }
  }
}

const hashTable = new HashTable();


hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')
console.log("After insert in my hash table!!");
console.log(hashTable);

console.log(hashTable.search('rei'))
console.log(hashTable.search('lita1'))
console.log(hashTable.search('serena'))

console.log(hashTable.remove('darien'));
console.log(hashTable.remove('mina11'));

console.log("After remove from my hash table!!");
console.log(hashTable);
