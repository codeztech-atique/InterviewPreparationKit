// ➡ Simplify multiple subsystems into one method.

export {}

class Inventory { check(b: string) { return true; } }
class Payment { pay(u: string) { console.log("Paid by", u); } }
class Notification { notify(u: string, b: string) { console.log(`${u} borrowed ${b}`); } }

class LibraryFacade {
  inv = new Inventory();
  pay = new Payment();
  note = new Notification();
  borrow(user: string, book: string) {
    if (this.inv.check(book)) {
      this.pay.pay(user);
      this.note.notify(user, book);
    }
  }
}

new LibraryFacade().borrow("Atique", "DSA");
