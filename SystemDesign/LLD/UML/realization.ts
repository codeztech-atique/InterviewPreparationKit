export {};

interface BookManager {
  addBook(book: Book): void;
}

class Book {
  constructor(public title: string) {}
}

class Library implements BookManager {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`${book.title} added to library`);
  }
}

const lib = new Library();
lib.addBook(new Book("The Alchemist"));

// ✅ "The Alchemist added to library"
