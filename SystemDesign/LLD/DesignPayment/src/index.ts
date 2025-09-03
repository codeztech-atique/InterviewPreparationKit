// ---- Contract (Abstraction)
interface PaymentMethod {
  pay(amount: number, user: User): void; // now includes user
}

// ---- User class
class User {
  constructor(public id: string, public name: string) {}
}

// ---- Implementations (Inheritance + Polymorphism)
class CreditCard implements PaymentMethod {
  constructor(private cardNumber: string) {}

  pay(amount: number, user: User): void {
    console.log(
      `User ${user.name} [${user.id}] paid ₹${amount} via Credit Card ${this.cardNumber}`
    );
  }
}

class DebitCard implements PaymentMethod {
  constructor(private cardNumber: string) {}

  pay(amount: number, user: User): void {
    console.log(
      `User ${user.name} [${user.id}] paid ₹${amount} via Debit Card ${this.cardNumber}`
    );
  }
}

class UPI implements PaymentMethod {
  constructor(private upiId: string) {}

  pay(amount: number, user: User): void {
    console.log(
      `User ${user.name} [${user.id}] paid ₹${amount} via UPI ${this.upiId}`
    );
  }
}

// ---- Payment Service
class PaymentService {
  private paymentMethods: Map<string, PaymentMethod> = new Map();

  addPaymentMethod(name: string, method: PaymentMethod): void {
    this.paymentMethods.set(name, method);
  }

  makePayment(name: string, amount: number, user: User): void {
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
