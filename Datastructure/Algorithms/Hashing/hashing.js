// Youtube video 1 - https://www.youtube.com/watch?v=W5q0xgxmRd8
// Youtube video 2 - https://www.youtube.com/watch?v=j612Fj-mgCY
// Youtube video 3 - https://www.youtube.com/watch?v=hmMYPZ5wLX0

class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  // Simple hash function (modulus)
  _hash(value) {
    return value % this.table.length;
  }

  // Insert value into hash table
  insert(value) {
    const index = this._hash(value);

    if (!this.table[index]) {
      this.table[index] = []; // initialize bucket
    }

    // Avoid duplicates
    if (!this.table[index].includes(value)) {
      this.table[index].push(value);
    }
  }

  // Search value in hash table
  search(value) {
    const index = this._hash(value);

    if (this.table[index]) {
      for (let item of this.table[index]) {
        if (item === value) return true;
      }
    }
    return false;
  }

  // Display the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(`${i}: ${this.table[i] || []}`);
    }
  }
}

// ---------------------
// Example usage
// ---------------------

const arr = [40, 23, 52, 91, 64, 45, 86, 90]; // 40 and 90 collide (%10 = 0)

const ht = new HashTable();

for (let num of arr) {
  ht.insert(num);
}

ht.display();

console.log("Search 91:", ht.search(91)); // true
console.log("Search 99:", ht.search(99)); // false
