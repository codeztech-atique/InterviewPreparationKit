// ➡ Make old API fit new Library.

export {}

class OldLibrary {
  getBookList() { return ["Old DSA", "Old LLD"]; }
}

interface NewLibrary {
  listBooks(): string[];
}

class LibraryAdapter implements NewLibrary {
  constructor(private oldLib: OldLibrary) {}
  listBooks() { return this.oldLib.getBookList(); }
}

const adapter = new LibraryAdapter(new OldLibrary());
console.log(adapter.listBooks());


