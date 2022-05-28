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
   push(data) {
      this.arr.push(data);
      return this;
   }
   pop() {
      this.arr.pop();
      return this;
   }
   peek() {
      let elements = this.arr.length - 1;
      elements = this.arr[elements];
      return elements;
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
