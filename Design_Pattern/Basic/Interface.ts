/* Interfaces → An interface defines a contract of methods and properties that a class must implement. */

// Define interface
interface Animal {
  name: string; // property
  sound(): void; // method (no implementation, just a contract)
}

// Class implementing the interface
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(this.name + " barks!");
  }
}

// Create an object
const dog = new Dog("Tommy");
dog.sound();   // Tommy barks!
