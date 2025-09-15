export {};

class Book {
  constructor(public title: string) {}
}

class LibraryBook extends Book {
  constructor(title: string, public libraryId: number) {
    super(title);
  }
}

const lb = new LibraryBook("The Alchemist", 101);
console.log(lb.title);       // ✅ "The Alchemist"
console.log(lb.libraryId);   // ✅ 101
