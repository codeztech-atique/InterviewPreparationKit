export {};

interface Payment {
  pay(amount: number): void;
}

class UpiPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} via UPI`);
  }
}

const payment: Payment = new UpiPayment();
payment.pay(500);
