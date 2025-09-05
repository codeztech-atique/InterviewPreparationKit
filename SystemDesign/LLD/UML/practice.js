"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("".concat(book.title, " added to library"));
    };
    Library.prototype.showBook = function () {
        console.log(this.books);
    };
    return Library;
}());
var library = new Library();
library.addBook(new Book("DSA"));
library.addBook(new Book("LLD"));
library.addBook(new Book("HLD"));
library.showBook();
