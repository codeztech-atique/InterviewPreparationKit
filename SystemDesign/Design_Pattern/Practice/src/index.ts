export = {}


class Book {
    constructor(public title: string, public author: string, public pages: number) {

    } 
}

class BookBuilder {
    private title: string = "";
    private author: string = "";
    private pages: number = 0;

    setTitle(t: string) { this.title = t;  return this; }
    setAuthor(a: string) { this.author = a;  return this; }
    setPages(p: number) { this.pages = p;  return this; }

    build() {
        return new Book(this.title, this.author, this.pages);
    }
}

const book = new BookBuilder().setTitle("LLD").setAuthor("Atique Ahmed").setPages(22);
console.log(book.build())