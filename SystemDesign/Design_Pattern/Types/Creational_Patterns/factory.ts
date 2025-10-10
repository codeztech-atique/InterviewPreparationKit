// ➡ A factory that creates books for us.

// ➡ Centralize creation logic for a single product.

export {};

class Book {
  constructor(public title: string) {}
}

class BookFactory {
  static create(title: string) {
    // (add defaults/validation/logging here if needed)
    return new Book(title);
  }
}

// demo
const book = BookFactory.create("LLD");
console.log(book.title);



