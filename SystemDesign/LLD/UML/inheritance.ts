export {};

class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name);
  }
}

const emp = new Employee("Atique", "Engineer");
console.log(`Employee Name: ${emp.name} and profile is : ${emp.role}`);