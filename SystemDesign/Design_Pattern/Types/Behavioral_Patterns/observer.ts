// ➡ Notify when a book is added.

type Listener = (title: string) => void;
class Library {
  private books: string[] = [];
  private listeners: Listener[] = [];
  addBook(title: string) {
    this.books.push(title);
    this.listeners.forEach(l => l(title));
  }
  onAdd(l: Listener) { this.listeners.push(l); }
}
const lib = new Library();
lib.onAdd(t => console.log("New book:", t));
lib.addBook("DSA");
