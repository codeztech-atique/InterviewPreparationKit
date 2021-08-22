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

// function Arrsort(a, b) {
//     return a.percentage - b.percentage;
// }
// console.log(obj.sort(Arrsort));

// function arrSort(a, b) {
//     return a - b;
// }

// function arrStrSort(a, b) {
//     var nA = a.toLowerCase();
//     var nB = b.toLowerCase();
//     if(nA < nB) {
//         return -1;
//     }
//     else if(nA > nB) {
//         return 1;
//     }
//     return 0;
// }
// const arrStr = ['sunny', 'atique', 'hello', 'bollow', 'collow'];

// const arrNum = [4, 6, 1, 2, 44, 12, 11];
// console.log(arrStr.sort(arrStrSort));
// console.log(arrNum.sort(arrSort))

// function parseData(str) {
//     //return Function(`'use strict'; return (${str})`)()
//     return Function (`return ${str}`)();
// }
// function parseEquation(str) {
//     return Function(`return ${str}`)()
// }

// console.log(parseEquation(`1+3+5+(5-3)`));

// Get all the subssrting  

// var theString = 'somerandomword';
// console.log(getAllSubstrings(theString));


// Find the Duplicates Hash table
// var arr2 = [22,5,3,90,3,44,1,2];
// console.log(findDuplicatesUsingHash(arr2));

// Recursion of Below Problem
// console.log(sum(1)(2)(32)());
// console.log(sum(1)(2)(22)());
// console.log(sum(1)(2)(12)());
// console.log(sum(1)(2)());



// Find the count of each elements from the array
// var arr = ["atique","atique","sunny","ahmed","sunny"];
// console.log(findCountOfEachElementsOfArray(arr));

// Find the distint elements
// var arrD = [4,1,2,1,5,5,5,5,4,7];
// console.log(findDistinct(arrD));

// factorial of a number

// const factorialUsingRecurssion = (num) => {
//     if(num == 1 || num == 0) {
//        return 1;
//     }
//     return num * factorialUsingRecurssion(num - 1);
// };

// const factorialUsingIterative = (num) => {
//     var res = 1;
//     if(num == 0) {
//         return 1;
//     }
//     for (let i = num; i >= 1; i--) {
//         res *= i
//     }
//     return res;
// };

// console.log(factorialUsingRecurssion(6));
// console.log(factorialUsingIterative(6));
// Find Repeating and Non Repeating Elements

// const repetingElements = (arr) => {
//    result = arr.filter((v, i) => arr.indexOf(v) !== arr.lastIndexOf(v));
//    return result;
// }

// const nonRepetingElements = (arr) => {
//     result = arr.filter((v, i) => arr.indexOf(v) === arr.lastIndexOf(v));
//     return result;
// }

// var arr = [4,1,2,1,2];
// console.log(repetingElements(arr))
// console.log(nonRepetingElements(arr))




// GCD and LCM
// GCDandLCM(72, 120);
// GCD:- 24
// LCM:- 360


// Fibonacci Number

// const FiboNacci = (num) => {
//     let a = 0, b = 1, c = 0;
//     if(num < 1) {
//         return 0;
//     } if(num <= 2) {
//         return 1;
//     }
//     for(let i = 2; i <= num; i++) {
//        c = a + b;
//        console.log(a, " ======> ", b);
//        a = b;
//        b = c;
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


// var arr = [1,2,4,7,11,12,15,17,19,21,27,29,43,44];
// console.log(SinglePrimeNumber(7));

// console.log(MultiplePrimeNumber(arr));


// Fibonacci -

// 0, 1 - for return
// 1, 2 - If statement

// === -1 (distinct)
// > -1 (Find the first duplicates)


// Sap Exam Asked
// console.log(findPermutations("aabc"))

// Merge Sort
// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

//Wave Sort
// var waved = waveSort([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85]);
// console.log(waved);