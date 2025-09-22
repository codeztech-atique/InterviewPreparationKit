// S — Single Responsibility Principle (SRP)
// ➡ A class should have one reason to change.

class Book {
  constructor(title) {
    this.title = title;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
}

class LibraryPrinter {
  print(library) {
    library.books.forEach(b => console.log(`Book: ${b.title}`));
  }
}

const lib = new Library();
lib.addBook(new Book("DSA"));
lib.addBook(new Book("System Design"));

new LibraryPrinter().print(lib);
// ✅ Book: DSA
// ✅ Book: System Design
