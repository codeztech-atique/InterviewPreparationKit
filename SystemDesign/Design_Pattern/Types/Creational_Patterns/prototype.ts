// ➡ Clone an existing book.

class Book {
  constructor(public title: string) {}
  clone() { return new Book(this.title); }
}

const b1 = new Book("DSA");
const b2 = b1.clone();
console.log(b1 === b2); // false (copy, not same)
