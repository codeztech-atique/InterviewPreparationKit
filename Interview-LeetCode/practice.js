// Sort Array Objects --

// const obj = [
//     {
//         name: 'Atique',
//         percentage: 50
//     },
//     {
//         name: 'Sunny',
//         percentage: 150
//     },
//     {
//         name: 'Rina',
//         percentage: 120
//     }
// ];

// function arraySort(a, b) {
//     return a.percentage - b.percentage;
// }

// console.log(obj.sort(arraySort));

// Sort the array which are having only text

// function arrSort(a, b) {
//    let a1 = a.toLowerCase();
//    let b1 = b.toLowerCase();
//    if(a1 < b1) {
//        return -1;
//    } else if( a1 > b1) {
//        return 1;
//    } else {
//        return 0;
//    }
// }

// const arrStr = ['sunny', 'atique', 'hello', 'bollow', 'collow'];

// console.log(arrStr.sort(arrSort))

// Sort the array which are having only numbers

// function arrNumberSort(a, b) {
//    return a - b;
// }

// const arrNum = [4, 6, 1, 2, 44, 12, 11];

// console.log(arrNum.sort(arrNumberSort))

// Get the ASCII of the charecter = charCodeAt || If we do of string ---- 
// var aa = "anystring" || aa.charCodeAt() --> It will always take the first character

// Swap the number between 2 element without using third variable ---

// let a = 2;
// let b = 3;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a, b);

// Parse the Equations

// function parseEquation(str) {
//     return new Function(`return ${str}`)()
// }

// console.log(parseEquation(`1+3+5+(5-3)+10`))

// const getAllSubstrings = (str) => {
//     let result = [];
//     for(let i=0;i<str.length;i++) {
//         for(let j=i+1;j<str.length+1;j++) {
//            result.push(str.slice(i, j));
//         }
//     }
//     return result;
// }

// var theString = 'somerandomword';
// console.log(getAllSubstrings(theString));

// const findDuplicatesUsingHash = (arr) => {
//     let obj = {}, dup;
//     for(let i = 0; i < arr.length; i++) {
//         if(Object.values(obj).indexOf(arr[i]) > -1) {
//             dup = arr[i];
//             break;
//         } else {
//             obj[i] = arr[i];
//         }
//     }
//     return dup;
// }

// // Find the Duplicates Hash table
// var arr2 = [22,5,3,90,32,44,1,2,2];
// console.log(findDuplicatesUsingHash(arr2));

// let sum = a => b => b ? sum(a+b) : a;

// // Recursion of Below Problem
// console.log(sum(1)(2)(32)());
// console.log(sum(1)(2)(22)());
// console.log(sum(1)(2)(12)());
// console.log(sum(1)(2)());

// const findCountOfEachElementsOfArray = (arr) => {
//    const obj = {};
//    arr.forEach((r) => {
//        obj[r] = (obj[r] || 0) + 1;
//    })
//    return obj
// }

// // Find the count of each elements from the array
// var arr = ["atique","atique","sunny","ahmed","sunny","atique"];
// console.log(findCountOfEachElementsOfArray(arr));

// const findDistinct = (arr) => {
//     const distinctArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(distinctArr.indexOf(arr[i]) == -1) {
//             distinctArr.push(arr[i])
//         }
//     }
//     return distinctArr
// }

// // Find the distint elements
// var arrD = [4,1,2,1,5,5,5,5,4,7];
// console.log(findDistinct(arrD));


// Factorial of a number

// const factorialUsingRecurssion = (num) => {
//    if(num == 0 || num == 1) {
//        return 1;
//    } 
//    return num * factorialUsingRecurssion(num - 1);
// }

// const factorialUsingIterative = (num) => {
//     let fact = 1;
//     if(num == 0 || num == 1) {
//         return 1;
//     } 
//     for(let i = 2; i <= num; i++) {
//        fact *= i;
//     }
//     return fact;
// }

// console.log(factorialUsingRecurssion(6));
// console.log(factorialUsingIterative(6));

// Find Repeating and Non Repeating Elements

// const repetingElements = (arr) => {
//    let result = arr.filter((v, i) => arr.indexOf(v) != arr.lastIndexOf(v))
//    return result
// }

// const nonRepetingElements = (arr) => {
//     let result = arr.filter((v, i) => arr.indexOf(v) == arr.lastIndexOf(v))
//     return result
// }


// var arr = [4,1,2,1,2];
// console.log(repetingElements(arr))
// console.log(nonRepetingElements(arr))


// GCD and LCM

// const gcdAndLcm = (m, n) => {
//    let a = m, b = n;
//    while(m != n) {
//        if(m > n) {
//            m = m - n;
//        } else {
//            n = n - m;
//        }
//    }
//    console.log("GCD:", m);
//    console.log("LCM:", (a * b) / m);
// }

// gcdAndLcm(72, 120);
// GCD:- 24
// LCM:- 360

// const FiboNacci = (num) => {
//     let a = 0, b = 1, c = 0;
//     if(num < 1) {
//        return 0;
//     } if(num <= 2) {
//        return 1;
//     } 
//     for(let i = 2; i <= num; i++) {
//         c = a + b;
//         console.log(a, " ======> ", b);
//         a = b;
//         b = c;
//     }
//     return c;
// }

// const FiboNacciRecurssion = (num) => {
//     if(num < 1) {
//         return 0;
//     } if(num <= 2) {
//         return 1;
//     } 
//     return FiboNacciRecurssion(num - 1) + FiboNacciRecurssion(num - 2);
// }

// console.log("FiboNacci of a Number:", FiboNacci(8));
// console.log("FiboNacci of a Number using recurssion:", FiboNacciRecurssion(8));

// Prime Number Logic

// const SinglePrimeNumber = (num) => {
//     if(num == 1 || num == 2) {
//         return true;
//     } else {
//         for(let i = 2; i <= Math.sqrt(num); i++) {
//             if(num % i == 0) {
//                 return false;
//             }
//         }
//     }
   
//     return true;
// }

// const MultiplePrimeNumber = (arr) => {
//     arr = arr.filter((num) => {
//         if(num == 1 || num == 2) {
//             return true;
//         } else {
//             for(let i = 2; i <= Math.sqrt(num); i++) {
//                 if(num % i == 0) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     });
//     return arr;
// }

// var arr = [1,2,4,7,11,12,15,17,19,21,27,29,43,44,997];
// console.log(SinglePrimeNumber(21));

// console.log(MultiplePrimeNumber(arr));

// function getMissingNo(arr) {
 
// }

// Driver Code

let arr = [1, 3, 5, 6, 7, 8, 10];

console.log(getMissingNo(arr));