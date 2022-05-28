// Check the Balanced Paranthesis
// Solve this equation using stack

function removeBrackets(expression) {
      let arr = [];
      for(var i=0;i<expression.length;i++) {
         var data = expression[i];
         console.log("Array: ---> ")
         if(data === '(' || data === "{" || data === "[") {
            console.log("Array: ---> ", data)
            arr.push(data)
         }
         if(arr.length === 0) {
            return false;
         }
         switch(data) {
            case ')': arr.pop(); console.log(') --> '+arr.pop()); break;
            case '}': arr.pop(); console.log('} --> '+arr.pop()); break;
            case ']': arr.pop();  console.log('] --> '+arr.pop()); break;
         }
      }
      console.log("Array:", arr)
      if(arr.length === 0) {
         return true;
      } else {
         return false;
      }
}

// const expr = "([{}]){}{}";
const exprClosingBracket = "([{}]))";

// if (removeBrackets(expr)) {
//    console.log("Balanced");
// } else {
//    console.log("Not Balanced");
// }

if (removeBrackets(exprClosingBracket)) {
   console.log("Balanced");
} else {
   console.log("Not Balanced");
}

// ([{}]){}{} --> Balanced
// ([{}]){}{}][ --> Not Balanced

// ([{}]) --> Balanced

// ||
// | { |
// | [ |
// | ( |