"use strict";
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
class BookBuilder {
    constructor() {
        this.title = "";
        this.author = "";
        this.pages = 0;
    }
    setTitle(t) { this.title = t; return this; }
    setAuthor(a) { this.author = a; return this; }
    setPages(p) { this.pages = p; return this; }
    build() {
        return new Book(this.title, this.author, this.pages);
    }
}
const book = new BookBuilder().setTitle("LLD").setAuthor("Atique Ahmed").setPages(22);
console.log(book.build());
module.exports = {};
