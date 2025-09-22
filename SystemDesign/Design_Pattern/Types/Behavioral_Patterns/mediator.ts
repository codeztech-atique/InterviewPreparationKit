export = {};

interface ChatMediator {
  sendMessage(msg: string, user: User): void;
}

class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(msg: string, user: User): void {
    for (let u of this.users) {
      if (u !== user) u.receive(msg);
    }
  }
}

class User {
  constructor(private name: string, private mediator: ChatMediator) {}

  send(msg: string) {
    console.log(this.name + " sends: " + msg);
    this.mediator.sendMessage(msg, this);
  }

  receive(msg: string) {
    console.log(this.name + " receives: " + msg);
  }
}

// Usage
const chatRoom = new ChatRoom();
const u1 = new User("Alice", chatRoom);
const u2 = new User("Bob", chatRoom);
chatRoom.addUser(u1);
chatRoom.addUser(u2);

u1.send("Hi Bob!");
