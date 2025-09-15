export {}

interface BookManager {
    addBook(book: Book):void
    showBook(): void
}

class Book {
    constructor(public title: string) {}
}

class Library implements BookManager {
    public books : Book [] = [];
    addBook(book: Book): void {
        this.books.push(book);
        console.log(`${book.title} added to library`);
    }
    showBook() {
        console.log(this.books);
    }
}


const library = new Library();
library.addBook(new Book("DSA"))
library.addBook(new Book("LLD"))
library.addBook(new Book("HLD"))
library.showBook();