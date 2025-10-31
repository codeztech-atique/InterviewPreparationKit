function evaluateExpression(s) {
  const stack = [];
  let currentNum = 0;
  let lastSign = '+';       // pretend a leading '+'
  
  // Helper to apply lastSign with currentNum
  const apply = () => {
    if (lastSign === '+') stack.push(currentNum);
    else if (lastSign === '-') stack.push(-currentNum);
    else if (lastSign === '*') stack.push(stack.pop() * currentNum);
    else if (lastSign === '/') {
      const prev = stack.pop();
      // truncate toward 0 like typical JS integer division in these problems
      stack.push(prev < 0 ? Math.ceil(prev / currentNum) : Math.floor(prev / currentNum));
    }
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= '0' && ch <= '9') {
      currentNum = currentNum * 10 + (ch.charCodeAt(0) - 48);
    }

    if ((ch < '0' || ch > '9') && ch !== ' ' || i === s.length - 1) {
      apply();
      lastSign = ch;      // update to the operator we just saw
      currentNum = 0;     // reset number
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
