export {};

class Book {
  constructor(public title: string) {}
}

class Library {
  private books: Book[] = [];

  constructor() {
    this.books.push(new Book("The Alchemist"));
    this.books.push(new Book("1984"));
  }

  showBooks() {
    this.books.forEach(b => console.log(b.title));
  }
}

const lib = new Library();
lib.showBooks();

// ✅ "The Alchemist"
// ✅ "1984"