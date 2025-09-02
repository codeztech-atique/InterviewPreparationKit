/* 🏗️ Abstraction

👉 Definition:
Abstraction means hiding implementation details and showing only the essential features to the outside world.

Achieved in TypeScript using abstract classes and interfaces.

You cannot create an object of an abstract class directly.

*/

// Abstract class (cannot be directly created)
abstract class Animal {
  abstract sound(): void; // only says "must have sound()"
}

// Dog must implement sound()
class Dog extends Animal {
  sound(): void {
    console.log("Dog barks");
  }
}

// Cat must implement sound()
class Cat extends Animal {
  sound(): void {
    console.log("Cat meows");
  }
}

// Usage
const d = new Dog();
d.sound();   // Dog barks

const c = new Cat();
c.sound();   // Cat meows
