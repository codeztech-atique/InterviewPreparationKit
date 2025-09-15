interface PaymentMethod {
  pay(amount: number, user: Customer): void;
}

class Customer {
  constructor(public id: string, public name: string) {}
}

class CreditCrd implements PaymentMethod {
  cardNumber: string;
  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number, user: User) {
      console.log(`User ${user.name} paid ${amount} with this credit card ${this.cardNumber}`)
  }
}

class DebitCrd implements PaymentMethod {
  cardNumber: string;
  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number, user: User) {
      console.log(`User ${user.name} paid ${amount} with this Debit card ${this.cardNumber}`)
  }
}


class UPIMode implements PaymentMethod {
  cardNumber: string;
  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number, user: User) {
      console.log(`User ${user.name} paid ${amount} with this UPI - ${this.cardNumber}`)
  }
}


class PaymentServices {
  private payMethod: Map<string, PaymentMethod> = new Map();

  addPaymentMethod(name: string, method: PaymentMethod) {
    this.payMethod.set(name, method);
  }

  makePayment(name: string, amount: number, user: User) {
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
