// Check the Balanced Paranthesis
// Solve this equation using stack

function RemoveBrackets(expression) {
      let arr = [];
      for(var i=0;i<expression.length;i++) {
         var data = expression[i];
         if(data === '(' || data === "{" || data === "[") {
            arr.push(data)
         }
         if(arr.length === 0) {
            return false;
         }
         switch(data) {
            case ')': arr.pop(); break;
            case '}': arr.pop(); break;
            case ']': arr.pop(); break;
         }
      }
      if(arr.length === 0) {
         return true;
      } else {
         return false;
      }
}

const expr = "([{}]){}{}";

if (RemoveBrackets(expr)) {
   console.log("Balanced");
} else {
   console.log("Not Balanced");
}