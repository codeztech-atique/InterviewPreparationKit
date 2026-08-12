// Time and Space is O(n) and O(n)
function evaluateExpression(s) {
  let stack = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= '0' && ch <= '9') {
      num = num * 10 + Number(ch);
    }

    if ((isNaN(ch) && ch !== ' ') || i === s.length - 1) {

      if (sign === '+') stack.push(num);
      if (sign === '-') stack.push(-num);
      if (sign === '*') stack.push(stack.pop() * num);
      if (sign === '/') stack.push(Math.trunc(stack.pop() / num));

      sign = ch;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

// Quick tests
console.log(evaluateExpression("3+2*2"));        // 7
console.log(evaluateExpression(" 3/2 "));        // 1
console.log(evaluateExpression(" 3+5 / 2 "));    // 5
console.log(evaluateExpression("10+2*6"));       // 22
console.log(evaluateExpression("100*2+12"));     // 212
console.log(evaluateExpression("(100*2)*12"));  
