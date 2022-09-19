// Check Paranthesis wheather its balance or not



const exprClosingBracket = "([{}])";

const isBalanced = (str) => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
          arr.push(str[i])
        }
        if(arr.length == 0) {
          return false;
        }
        switch(str[i]) {
          case ')': arr.pop(); break;
          case '}': arr.pop(); break;
          case ']': arr.pop(); break;
        }
    }
    if(arr.length == 0) {
      return true;
    } else {
      return false;
    }
}

const mainFunction = (exprClosingBracket) => {
    if(isBalanced(exprClosingBracket)) {
      return true;
    } else {
      return false;
    }
}

console.log(mainFunction(exprClosingBracket));
