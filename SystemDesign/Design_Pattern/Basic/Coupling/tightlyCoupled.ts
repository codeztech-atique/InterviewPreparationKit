export = {};

class EmailService {
  sendEmail(message: string) {
    console.log("Sending email:", message);
  }
}

class Notification {
  private emailService = new EmailService();  // 👈 Direct dependency

  sendNotification(msg: string) {
    this.emailService.sendEmail(msg);
  }
}

// Usage
const notif = new Notification();
notif.sendNotification("Welcome!");
