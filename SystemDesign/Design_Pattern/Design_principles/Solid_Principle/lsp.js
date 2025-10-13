// L — Liskov Substitution Principle (LSP)
// ➡ Subclasses of Book should behave like Book.
// ➡ Subclasses should be extends to a parent class

class Book {
  read() {
    console.log("Reading a book...");
  }
}

class LibraryBook extends Book {
  read() {
    console.log("Reading a library book...");
  }
}

const books = [new Book(), new LibraryBook()];
books.forEach(b => b.read());
// ✅ Reading a book...
// ✅ Reading a library book...
