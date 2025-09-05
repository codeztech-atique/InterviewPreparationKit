// 🔹 Association (—)

// Definition: A structural link between two classes.

// Nature: Long-term, they "know about each other".

// Example: A Library keeps a reference to Books.

export {};
class Book {
  constructor(public title: string) {}
}

class Library {
  constructor(public name: string) {}

  linkBook(book: Book) {
    console.log(`${book.title} is available at ${this.name}`);
  }
}

const book = new Book("The Alchemist");
const library = new Library("City Library");
library.linkBook(book);

// ✅ "The Alchemist is available at City Library"