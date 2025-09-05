// ➡ Represent adding a book as a command.

export {};
class Library {
  books: string[] = [];
}
class AddBookCommand {
  constructor(private lib: Library, private title: string) {}
  execute() { this.lib.books.push(this.title); }
  undo() { this.lib.books.pop(); }
}
const lib = new Library();
const cmd = new AddBookCommand(lib, "LLD");
cmd.execute(); console.log(lib.books); // ["LLD"]
cmd.undo(); console.log(lib.books); // []
