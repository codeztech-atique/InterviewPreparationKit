//Factorial WithOut Recersive Function

function factorial(n) {
   if(n === 0 || n === 1) {
      return 1;
   } 
   var result = n;
   while(n>1) {
       result = result * (n-1);
       n--;
   }
   return result;
}

console.log("Factorial without recursive - ", factorial(5));

//Fortorial With Recursive Function

function factorial_WithRecursive(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    return n * factorial_WithRecursive(n-1);
}
console.log("Factorial with recursive - ", factorial_WithRecursive(5));
