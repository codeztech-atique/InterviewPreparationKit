// ➡ Abstract Factory – create related objects (book + cover) without naming classes.
export {};

// product types
class Book {
  constructor(public title: string, public format: string) {}
}

class Cover {
  constructor(public style: string) {}
}

// abstract factory
interface PublishingFactory {
  createBook(title: string): Book;
  createCover(): Cover;
}

// concrete factories
class PrintFactory implements PublishingFactory {
  createBook(title: string) { return new Book(title, "Paperback"); }
  createCover() { return new Cover("Paper Cover"); }
}

class DigitalFactory implements PublishingFactory {
  createBook(title: string) { return new Book(title, "ePub"); }
  createCover() { return new Cover("Digital Artwork"); }
}

// client
class Publisher {
  constructor(private factory: PublishingFactory) {}
  publish(title: string) {
    const book = this.factory.createBook(title);
    const cover = this.factory.createCover();
    console.log(`📘 ${book.title} (${book.format}) with ${cover.style}`);
  }
}

// demo
new Publisher(new PrintFactory()).publish("HLD in Practice");
new Publisher(new DigitalFactory()).publish("LLD for Engineers");
