// O — Open/Closed Principle (OCP)
// ➡ Library should be open to extension, not modification.

class Book {
  constructor(title) {
    this.title = title;
  }

  describe() {
    return `Book: ${this.title}`;
  }
}

class ReferenceBook extends Book {
  describe() {
    return `Reference Book: ${this.title}`;
  }
}

const books = [new Book("DSA"), new ReferenceBook("Algorithms")];
books.forEach(b => console.log(b.describe()));
// ✅ Book: DSA
// ✅ Reference Book: Algorithms
