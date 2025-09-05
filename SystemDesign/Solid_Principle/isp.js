// I — Interface Segregation Principle (ISP)
// ➡ Don’t force classes to depend on methods they don’t use.

class Book {
  constructor(title) {
    this.title = title;
  }
}

class Borrowable {
  borrow(book) {
    console.log(`Borrowing: ${book.title}`);
  }
}

class Readable {
  read(book) {
    console.log(`Reading: ${book.title}`);
  }
}

const book = new Book("System Design");
new Borrowable().borrow(book); // ✅ Borrowing: System Design
new Readable().read(book);     // ✅ Reading: System Design
