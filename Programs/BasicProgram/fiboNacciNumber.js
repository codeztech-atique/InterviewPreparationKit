function fiboNacciNumbers(number) {
  var prev_first = 0, prev_second = 1, next = 0;  
  for(var i=2; i<=number; i++) {
     console.log(prev_first, prev_second); 
     next = prev_first + prev_second;
     prev_first = prev_second;
     prev_second = next
  }
  return next;
}


function fiboNacciNumbersUsing_Recursion(number) {
    if (number < 1)
     return 0;

    if (number <= 2)
     return 1;
  return fiboNacciNumbersUsing_Recursion(number - 1) + fiboNacciNumbersUsing_Recursion(number - 2)
}


console.log("Fibonacci Numbers are - ", fiboNacciNumbers(8));
console.log("Fibonacci Numbers using recursion - ", fiboNacciNumbersUsing_Recursion(8));