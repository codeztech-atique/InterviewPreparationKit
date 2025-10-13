// D — Dependency Inversion Principle (DIP)
// ➡ Library should depend on interface or abstraction (not concrete logging).
// ➡ In simple terms the DIP suggests that classes should rely on interface or abstractions rather than conrete implementaitons. 

class Logger {
  log(msg) {}
}

class ConsoleLogger extends Logger {
  log(msg) {
    console.log("LOG:", msg);
  }
}

class Book {
  constructor(title) {
    this.title = title;
  }
}

class Library {
  constructor(logger) {
    this.logger = logger;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.logger.log(`Added: ${book.title}`);
  }
}

const lib = new Library(new ConsoleLogger());
lib.addBook(new Book("DSA"));
// ✅ LOG: Added: DSA
