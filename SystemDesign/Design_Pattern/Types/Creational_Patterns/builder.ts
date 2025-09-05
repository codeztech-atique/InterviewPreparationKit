// ➡ Build a book step by step.

export {}

class Book {
  constructor(public title: string, public author?: string, public pages?: number) {}
}

class BookBuilder {
  private title = "";
  private author = "";
  private pages = 0;
  setTitle(t: string) { this.title = t; return this; }
  setAuthor(a: string) { this.author = a; return this; }
  setPages(p: number) { this.pages = p; return this; }
  build() { return new Book(this.title, this.author, this.pages); }
}
const book = new BookBuilder().setTitle("HLD").setAuthor("Atique").setPages(200).build();
console.log(book);
