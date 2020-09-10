function primeNumber(data) {
   if(data === 1 || data === 2) {
       return true;
   } else {
       for(var i=2; i<data; i++) {
          if(data%i === 0) {
              return false;
          }
       }
       return true;
   }
}
function primeNumberUsingFilter(res) {
   var primeNums = res.filter((num) => {
       if(num === 1 || num === 2) {
           return true;
       } else {
           for(var i=2;i<=Math.sqrt(num);i++) {
               if(num%i === 0) {
                   return false;
               }
           }
           return true;
       }
   })
   return primeNums;
}
var arr = [1,2,4,7,11,12,15,17,19,21,27,29];
console.log("Is Prime - ", primeNumber(7));
console.log("Prime numbers are - ", primeNumberUsingFilter(arr));

//  <---- Fibonacci of a Number ---->
function FiboNacci(data) {
   var a = 0, b = 1, c = 0;
   for(var i=2;i<=data;i++) {
       c = a + b;
       console.log(a, ' ---> ', b);
       a = b;
       b = c;
   }
   return c;
}

function FiboNacciRecurssion(data) {
   if(data < 1) {
       return 0;
   } if(data <= 2) {
       return 1;
   }
   return FiboNacciRecurssion(data - 1) + FiboNacciRecurssion(data - 2) 
}

console.log("FiboNacci of a Number:", FiboNacci(8));
console.log("FiboNacci of a Number using recurssion:", FiboNacciRecurssion(8));



//GCD and LCM 
let m=72, n=120; result = 0;

let a = m; b = n;

while(m!=n) {
    if(m>n) {
        m = m-n;
    } else {
        n = n - m;
    }
}
console.log("GCD:-", m);
console.log("LCM:-", (a*b)/m);

