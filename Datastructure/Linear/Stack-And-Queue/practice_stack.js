// Stack

// Mug --> Buscuits

// | 1, 1, 1, 1 - top |  -- Last In and First Out -- LIFO


// --> Push ---> Keeeping the buscuits
// --> Pop ---> Removing the buscuits
// --> Peek ---> Wanted get the last element from the Stack

class Stack {
   constructor() {
      this.arr = [];
   }
   push(value) {
      this.arr.push(value);
   }
   pop(value) {
      this.arr.pop();
   }
   peek() {
      return this.arr[this.arr.length - 1];
   }
   display() {
      return this.arr;
   }
}

var stc = new Stack();
stc.push(7);
stc.push(29);
stc.push(6);
stc.push(85);
stc.push(43);
stc.pop();
stc.pop();
console.log(stc.peek());
console.log(stc.display());
