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

  insert(key, value) {
    this.bucket[key] = value;
    return this;
  }

  remove(key) {
    delete this.bucket[key];
    return this;
  }

  search(key) {
    for (let data in this.bucket) {
      if(data === key) {
        // console.log(this.bucket[key]);
        return true;
      }
    };
    return false;
  }
}

const hashTable = new HashTable()

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

hashTable.remove('darien')
hashTable.remove('mina')

console.log("After remove from my hash table!!");
console.log(hashTable);
