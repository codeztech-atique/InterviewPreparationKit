// I — Interface Segregation Principle (ISP)
// ➡ Don’t force classes to depend on methods they don’t use.
// - Segrigate the interface based on the functionalites

interface IWorkable {
  work(): void;
}

interface IFeedable {
  eat(): void;
}

class Human implements IWorkable, IFeedable {
  work() {
    console.log("Human is working...");
  }

  eat() {
    console.log("Human is eating...");
  }
}

class Robot implements IWorkable {
  work() {
    console.log("Robot is working...");
  }
}

// ✅ Usage
const human = new Human();
human.work();
human.eat();

const robot = new Robot();
robot.work();
// robot.eat(); ❌ Property 'eat' does not exist — and that’s good!
