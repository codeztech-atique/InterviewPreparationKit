// ➡ Add logging to Library without changing it.
export {}

class Library {
  books: string[] = [];
  addBook(title: string) { this.books.push(title); }
}

class LoggingLibrary {
  constructor(private lib: Library) {}
  addBook(title: string) {
    console.log("Adding:", title);
    this.lib.addBook(title);
  }
}

const lib = new LoggingLibrary(new Library());
lib.addBook("HLD");
