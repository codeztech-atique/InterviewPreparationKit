"use strict";
class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class CreditCrd {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount, user) {
        console.log(`User ${user.name} paid ${amount} with this credit card ${this.cardNumber}`);
    }
}
class DebitCrd {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount, user) {
        console.log(`User ${user.name} paid ${amount} with this Debit card ${this.cardNumber}`);
    }
}
class UPIMode {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount, user) {
        console.log(`User ${user.name} paid ${amount} with this UPI - ${this.cardNumber}`);
    }
}
class PaymentServices {
    constructor() {
        this.payMethod = new Map();
    }
    addPaymentMethod(name, method) {
        this.payMethod.set(name, method);
    }
    makePayment(name, amount, user) {
        const pm = this.payMethod.get(name);
        if (!pm) {
            throw new Error(`No payment method registered as "${name}"`);
        }
        pm.pay(amount, user); // Runtime Polymorphism
    }
}
// ----------------------
// Client / Usage
// ----------------------
const user11 = new User("U001", "Atique");
const user22 = new User("U002", "Prateek");
const service11 = new PaymentService();
// Register methods
service.addPaymentMethod("DC", new DebitCard("5555-5555-5555-5555"));
service.addPaymentMethod("CC", new CreditCard("4111-1111-1111-1111"));
service.addPaymentMethod("UPI", new UPI("atique@okaxis"));
// Users making payments
service.makePayment("UPI", 500, user11);
service.makePayment("DC", 1200, user22);
service.makePayment("CC", 2500, user11);
