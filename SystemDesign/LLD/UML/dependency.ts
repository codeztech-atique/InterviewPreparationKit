// 🔹 Dependency (- - >)

// “Uses” relationship.

// Class only depends on another temporarily.

// Ownership: No (Library does not keep the Book).

// Lifetime: Once the method ends, relationship ends.

export {};
class Book {
  constructor(public title: string) {}
}

class Library {
  borrow(book: Book) {
    console.log(`Borrowing ${book.title} from library...`);
  }
}

const library = new Library();
library.borrow(new Book("The Alchemist"));

// ✅ "Borrowing The Alchemist from library..."