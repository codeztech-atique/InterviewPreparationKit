exports = {};

interface Expression {
  interpret(text: string): boolean;
}

class Word implements Expression {
  constructor(private word: string) {}
  interpret(text: string): boolean {
    return text.includes(this.word);
  }
}

// Usage
const java = new Word("Java");
console.log(java.interpret("I love Java"));  // true
console.log(java.interpret("I love Python")); // false
