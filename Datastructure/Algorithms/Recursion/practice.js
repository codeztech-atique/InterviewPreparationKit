
function factorial(num) {
  if(num == 0) {
    return num;
  }
  else {
    num = num + factorial(num - 1);
  }
  return num;
}

console.log(factorial(5))