// ➡ A factory that creates books for us.

export {}

class Book {
  constructor(public title: string) {}
}

class BookFactory {
  static createBook(title: string) {
    return new Book(title);
  }
}

const book = BookFactory.createBook("LLD");
console.log(book.title);


