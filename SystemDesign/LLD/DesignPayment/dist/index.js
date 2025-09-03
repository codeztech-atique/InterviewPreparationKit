"use strict";
// ---- User class
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// ---- Implementations (Inheritance + Polymorphism)
class CreditCard {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount, user) {
        console.log(`User ${user.name} [${user.id}] paid ₹${amount} via Credit Card ${this.cardNumber}`);
    }
}
class DebitCard {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount, user) {
        console.log(`User ${user.name} [${user.id}] paid ₹${amount} via Debit Card ${this.cardNumber}`);
    }
}
class UPI {
    constructor(upiId) {
        this.upiId = upiId;
    }
    pay(amount, user) {
        console.log(`User ${user.name} [${user.id}] paid ₹${amount} via UPI ${this.upiId}`);
    }
}
// ---- Payment Service
class PaymentService {
    constructor() {
        this.paymentMethods = new Map();
    }
    addPaymentMethod(name, method) {
        this.paymentMethods.set(name, method);
    }
    makePayment(name, amount, user) {
        const pm = this.paymentMethods.get(name);
        if (!pm) {
            throw new Error(`No payment method registered as "${name}"`);
        }
        pm.pay(amount, user); // Runtime Polymorphism
    }
}
// ----------------------
// Client / Usage
// ----------------------
const user1 = new User("U001", "Atique");
const user2 = new User("U002", "Prateek");
const service = new PaymentService();
// Register methods
service.addPaymentMethod("DC", new DebitCard("5555-5555-5555-5555"));
service.addPaymentMethod("CC", new CreditCard("4111-1111-1111-1111"));
service.addPaymentMethod("UPI", new UPI("atique@okaxis"));
// Users making payments
service.makePayment("UPI", 500, user1);
service.makePayment("DC", 1200, user2);
service.makePayment("CC", 2500, user1);
