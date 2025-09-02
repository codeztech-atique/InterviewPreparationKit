// Run-Time Polymorphism (Method Overriding)

class Animal {
    sounds(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sounds(): void {
        console.log("Dogs barks !!!");
    }
}

const d = new Dog();
