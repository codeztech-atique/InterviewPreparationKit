export {};
class Book {
  constructor(public title: string) {}
}

class Library {
  constructor(public books: Book[]) {}
}

const book1 = new Book("The Alchemist");
const library = new Library([book1]);

console.log(book1.title);         // ✅ "The Alchemist"
console.log(library.books[0]);    // ✅ Book { title: 'The Alchemist' }
