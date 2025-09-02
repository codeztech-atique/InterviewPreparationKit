/*

Inheritance --

The ability of creating a new class from an existing class. Inheritance is when 
an object acquires the property of another object. Inheritance allows a 
class (subclass) to acquire the properties and behavior of another 
class (superclass). It helps to reuse, customize and enhance the existing code. 
So it helps to write a code accurately and reduce the development time.

For example, a secintific calculator is an extended form of Caluculator, 
here Caluculator is parent and car secintific calculator is Child object.
Another example, a convertible car and 4x4 car are the extended form of car.

In short - Object of the 1 class aquire the property of another class

*/

class Animal {
    eat() {
        console.log("Animal Eat Food !!!");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dogs bark a lot");
    }
}

const d = new Dog();
d.eat();
d.bark();