// YAGNI = You Aren’t Gonna Need It.
// No need to the extra code

// Without Yagni

class Calculator1 {
  add(a, b) {
    return a + b;
  }

  // Unused / unnecessary methods
  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  // Future feature - no current use
  calculateSquareRoot(a) {
    return Math.sqrt(a);
  }
}

const calc1 = new Calculator1();
console.log(calc.add(2, 3)); // ✅ Only need addition

// With Yagni

class Calculator2 {
  add(a, b) {
    return a + b;
  }
}

const calc2 = new Calculator2();
console.log(calc.add(2, 3)); // ✅ Simple and enough for now