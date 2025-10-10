export = {};

interface MessageService {
  send(message: string): void;
}

class EmailService implements MessageService {
  send(message: string) {
    console.log("📧 Email sent:", message);
  }
}

class SMSService implements MessageService {
  send(message: string) {
    console.log("📱 SMS sent:", message);
  }
}

class Notification {
  constructor(private messageService: MessageService) {} // 👈 depends on abstraction

  sendNotification(msg: string) {
    this.messageService.send(msg);
  }
}

// Usage
const emailNotifier = new Notification(new EmailService());
emailNotifier.sendNotification("Welcome via Email!");

const smsNotifier = new Notification(new SMSService());
smsNotifier.sendNotification("Welcome via SMS!");
