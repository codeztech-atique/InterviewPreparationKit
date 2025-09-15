// 🔹 Composition (◆—)

// Definition: Strong form of aggregation.

// “Has-a” relationship, but with ownership of lifetime.

// If the whole is destroyed, the parts are also destroyed.

// In code: the whole creates and controls the lifecycle of its parts.


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