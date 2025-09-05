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
    }
    Library.prototype.borrow = function (book) {
        console.log("Borrowing ".concat(book.title, " from library..."));
    };
    return Library;
}());
var library = new Library();
library.borrow(new Book("DSA"));
