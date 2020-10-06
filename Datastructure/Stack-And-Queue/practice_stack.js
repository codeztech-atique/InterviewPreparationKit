//Using Array
class Stack {
   constructor() {
      this.array = [];
   }
   push(value) {
      this.array.push(value);
      return this;
   }
   pop() {
      this.array.pop();
      return this;
   }
   peek() {
      let length = this.array.length-1;
      var peekData = this.array[length];
      return peekData;
   } 
}

var StackData = new Stack();
console.log(StackData.push(12));
console.log(StackData.push(13));
console.log(StackData.push(10));
console.log(StackData.push(17));
console.log(StackData.push(19));
console.log(StackData.pop());
console.log(StackData.pop());
console.log(StackData.pop());
console.log(StackData.peek());