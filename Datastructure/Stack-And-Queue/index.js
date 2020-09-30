//Check Balance String

function checkBalanceString(expression) {
  let arr = [];
  for(var i=0;i<expression.length;i++){
    if(expression[i]=== '(' || expression[i]=== '{' || expression[i]=== '[') {
      arr.push(expression[i]);
    }

    if(arr.length==0) {
      return false;
    }

    switch(expression[i]) {
      case ')': arr.pop(expression[i]); break;
      case '}': arr.pop(expression[i]); break;
      case ']': arr.pop(expression[i]); break;
    }
  }
  if(arr.length === 0) {
      return true;
  } else {
        return false;
  }
}

const expr = "([{}]){}{}}";

if(checkBalanceString(expr)) {
  console.log("Balanced");
} else {
  console.log("Not Balanced");
}