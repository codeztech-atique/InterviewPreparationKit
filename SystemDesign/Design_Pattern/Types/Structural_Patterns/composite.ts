// ➡ A library has shelves, shelves have books.

export {}

interface LibraryItem { show(): void; }
class Book implements LibraryItem {
  constructor(public title: string) {}
  show() { console.log("Book:", this.title); }
}
class Shelf implements LibraryItem {
  private items: LibraryItem[] = [];
  add(item: LibraryItem) { this.items.push(item); }
  show() { this.items.forEach(i => i.show()); }
}
const shelf = new Shelf();
shelf.add(new Book("DSA"));
shelf.add(new Book("LLD"));
shelf.show();
