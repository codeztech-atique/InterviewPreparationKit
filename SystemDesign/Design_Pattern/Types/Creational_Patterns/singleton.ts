// ➡ Exactly one instance, shared globally.

export {};

class Library {
  private static instance?: Library;
  private books: string[] = [];
  private constructor() {}

  static getInstance() {
    if (!this.instance) this.instance = new Library();
    return this.instance;
  }

  addBook(title: string) { this.books.push(title); }
  showBooks() { console.log(this.books); }
}

// demo
const libA = Library.getInstance();
const libB = Library.getInstance();
libA.addBook("DSA");
console.log(libA === libB); // true
libB.showBooks();           // ["DSA"]
