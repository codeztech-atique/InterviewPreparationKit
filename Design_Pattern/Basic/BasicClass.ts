/* Classes & Objects → A class is a blueprint, and an object is an instance created from that blueprint. */

class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

// Objects = Real cars created from blueprint
const car1 = new Car("Toyota", 120);
const car2 = new Car("Tesla", 150);

car1.drive();  // Toyota is driving at 120 km/h
car2.drive();  // Tesla is driving at 150 km/h