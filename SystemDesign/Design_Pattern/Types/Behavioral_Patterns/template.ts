export = {};

abstract class PaymentProcessor {
  // Template Method
  public processPayment(amount: number): void {
    this.validate();
    this.debit(amount);
    this.sendNotification();
  }

  protected abstract validate(): void;
  protected abstract debit(amount: number): void;

  private sendNotification() {
    console.log("Notification sent!");
  }
}

class CreditCardPayment extends PaymentProcessor {
  protected validate() { console.log("Validating Credit Card..."); }
  protected debit(amount: number) { console.log(`Debiting $${amount} from Credit Card`); }
}

class UpiPayment extends PaymentProcessor {
  protected validate() { console.log("Validating UPI..."); }
  protected debit(amount: number) { console.log(`Debiting $${amount} via UPI`); }
}

// Usage
const payment: PaymentProcessor = new UpiPayment();
payment.processPayment(500);
