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


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'scatterPalindrome' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY strToEvaluate as parameter.
 */

// Scatter palindrom 
// str = ["aabb"]

// Problem is giving wrong. Correct output - 

// a,
// aa,
// aab, //Its not palindrom
// aabb,//Its not palindrom
// a,
// abb, //Its not palindrom
// b,
// bb,
// b



 
function scatterPalindrome(strToEvaluate) {
    // Write your code here
    console.log(strToEvaluate);
    var abc = [];
    for(var x=0;x<strToEvaluate.length;x++) {
        let count = 0;
        var s = strToEvaluate[x];
        for(var i=0; i< s.length; i++) {
            for(let j = i; j<i+2; j++) {
                let l = i;
                let r = j;
                
                while(l >= 0 && r < s.length && s[l] === s[r]) {
                    count++;
                    l--;
                    r++;
                }
            }
        }
        abc.push(count);
    }
    console.log(abc);
    return abc;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const strToEvaluateCount = parseInt(readLine().trim(), 10);

    let strToEvaluate = [];

    for (let i = 0; i < strToEvaluateCount; i++) {
        const strToEvaluateItem = readLine();
        strToEvaluate.push(strToEvaluateItem);
    }

    const result = scatterPalindrome(strToEvaluate);

    ws.write(result.join('\n') + '\n');

    ws.end();
}



// import java.util.Scanner;


/*
 * Create the Encrypter class here.
 */
//  class Encrypter {
//     public static String getEncryptedName(String name) {
//         Validator vl = new Validator();
//         boolean abc = vl.validate(name);
//         if(abc) {
//             String str = new String(name);
//             str = str.toLowerCase();
//             // Reverse of a String
//             String reverse = new StringBuffer(str).reverse().toString();
//             return reverse;
//         } else {
//             throw new IllegalArgumentException("Try again with valid name");
//         }
//     }
// }
// class Validator {
//     public boolean validate(String name) {
//         for (int i = 0; i < name.length(); i++) {
//             char ch = name.charAt(i);
            
//             if (ch != ' ' && !(Character.isLowerCase(ch) || Character.isUpperCase(ch))) {
//                 return false;
//             }
//         }
        
//         return true;
//     }
// }

// public class Solution {
//     private static final Scanner INPUT_READER = new Scanner(System.in);
    
//     public static void main(String[] args) {
//         String name = INPUT_READER.nextLine();
        
//         try {
//             Encrypter ec = new Encrypter();
//             System.out.println(ec.getEncryptedName(name));
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//     }
// }
