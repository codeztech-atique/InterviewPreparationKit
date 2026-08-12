// Time and Space is O(n) and O(n)
function evaluateExpression(s) {
  let i = 0;

  function calc() {
    let stack = [];
    let num = 0;
    let sign = '+';

    while (i < s.length) {
      let ch = s[i];

      if (ch >= '0' && ch <= '9') {
        num = num * 10 + Number(ch);
      }

      if (ch === '(') {
        i++;
        num = calc(); // evaluate inner expression
      }

      if ((isNaN(ch) && ch !== ' ') || i === s.length - 1) {

        if (sign === '+') stack.push(num);
        if (sign === '-') stack.push(-num);
        if (sign === '*') stack.push(stack.pop() * num);
        if (sign === '/') stack.push(Math.trunc(stack.pop() / num));

        sign = ch;
        num = 0;
      }

      if (ch === ')') break;

      i++;
    }

    return stack.reduce((a, b) => a + b, 0);
  }

  return calc();
}

// Quick tests
console.log(evaluateExpression("3+2*2"));        // 7
console.log(evaluateExpression(" 3/2 "));        // 1
console.log(evaluateExpression(" 3+5 / 2 "));    // 5
console.log(evaluateExpression("10+2*6"));       // 22
console.log(evaluateExpression("100*2+12"));     // 212
console.log(evaluateExpression("(100*2)*12"));   // 2400
console.log(evaluateExpression("2*(3+4)"));      // 14