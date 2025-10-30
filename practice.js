// Star print

// const starPrint = (n) => {
//     for(let i = 0; i <= n; i++) {
//         let str = "";
//         for(let j = i + 1; j >= 1; j--) {
//             str += `${j} `
//         }
//         console.log(str);
//     }
// }


// starPrint(5);

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


// const sortArr = (a, b) => {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     if(a < b) {
//         return -1
//     } else if(a > b) {
//         return 0;
//     } 
//     return 1;
// }

// const arrStr = ['sunny', 'atique', 'hello', 'bollow', 'collow'];
// console.log(arrStr.sort(sortArr));

// let arr = ['H', 'e', 'l', 'l', 'o'];

// arr.length = arr.length * 2; // Make space (double size)

// let n = arr.length;

// // Traverse backwards to avoid overwriting
// for (let i = n - 1; i >= 0; i--) {
//     console.log("I value:", i);
//     arr[2 * i] = arr[i];
//     arr[2 * i + 1] = arr[i];
// }

// console.log(arr.join("")); // HHeelloo




// const arrNum = [4, 6, 1, 2, 44, 12, 11];
// console.log(arrStr.sort(arrStrSort));
// console.log(arrNum.sort(arrSort))

// Swap 2 number without using 3rd variable

// var a = 2;
// var b = 4;


// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a,  b);


// Hard Problem -  https://leetcode.com/problems/basic-calculator/description
// function parseEquation(str) {
//     return new Function(`return ${str}`)()
// }


// console.log(parseEquation(`1+3+5+(5-3)+10`));

// Get all the subssrting  

// function getAllSubstrings(str) {
//     let arr = [];
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i + 1; j < str.length + 1; j++) {
//             // arr.push(str.slice(i, j))
//            // str.reduce((a, b) => a + b, 0) // this will do the sum.
//             // Math.min(...this.str.slice(i, j));
//         }
//     }
//     return arr;
// }

// var theString = 'some';
// console.log(getAllSubstrings(theString));


// const findDuplicatesUsingHash = (arr) => {
//    let obj = {}, dup = "";
//    for(let i = 0; i < arr.length; i++) {
//       if(Object.values(obj).indexOf(arr[i]) >  -1) {
//          dup = arr[i]; 
//          break;
//       } else {
//         obj[i] = arr[i];
//       }
//    }
//    return dup
// }

// const findDuplicatesUsingHash = (arr) => {
//     var obj = {}, dup = "";
//     for(let i = 0; i < arr.length; i++) {
//         if(Object.values(obj).indexOf(arr[i]) > -1) {
//             dup = arr[i];
//             break;
//         } else {
//             obj[i] = arr[i]
//         }
//     }
//     return dup;
// };

// Find the Duplicates Hash table
// var arr2 = [22,5,3,90,3,44,1,2];
// console.log(findDuplicatesUsingHash(arr2));

// let sum = a => b => b ? sum(a + b) : a;


// Recursion of Below Problem
// console.log(sum(1)(2)(32)());
// console.log(sum(1)(2)(22)());
// console.log(sum(1)(2)(12)());
// console.log(sum(1)(2)());

// function findCountOfEachElementsOfArray(arr) {
//     var obj = {};
//     arr.forEach((e) => {
//         obj[e] = (obj[e] || 0 ) + 1
//     })
//     return obj
// }

// Find the count of each elements from the array
// var arr = ["atique","atique","sunny","ahmed","sunny"];
// console.log(findCountOfEachElementsOfArray(arr));


// const findDistinct = (arr) => {
//    var dist = [];
//    for(let i = 0; i < arr.length; i++) {
//       if(dist.indexOf(arr[i]) == -1) {
//          dist.push(arr[i]);
//       }
//    }
//    return dist;
// }


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
//    return arr = arr.filter((i, v) => arr.indexOf(v) != arr.lastIndexOf(v));
// }


// const nonRepetingElements = (arr) => {
//     return arr = arr.filter((i, v) => arr.indexOf(v) == arr.lastIndexOf(v));
// }

// const nonRepetingElements = (arr) => {
//     return arr = arr.filter((v) => arr.indexOf(v) != arr.lastIndexOf(v));
// }
// const repetingElements = (arr) => {
//     return arr = arr.filter((v) => arr.indexOf(v) == arr.lastIndexOf(v));
// }

// var arr = [4,1,2,1,2,4,3];
// console.log(repetingElements(arr))
// console.log(nonRepetingElements(arr))


// GCD and LCM


// const gcdAndLcm = (m, n) => {
//     let a = m, b = n;
//     while(m != n) {
//         if(m > n) {
//             m = m - n;
//         } else {
//             n = n - m;
//         }
//     }
//     console.log("GCD:", (a * b) / m);
//     console.log("LCM:", m);
// }


// gcdAndLcm(72, 120);
// GCD:- 24
// LCM:- 360


// Fibonacci Number

// const FiboNacci = (n) => {
//     let a = 0, b = 1;
//     if(n == 1) return 1;
//     if(n == 2) return 2;

//     for(let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// const FiboNacciRecurssion = (num) => {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return FiboNacciRecurssion(num - 1) + FiboNacciRecurssion(num - 2);
// }



// console.log("FiboNacci of a Number:", FiboNacci(8));
// console.log("FiboNacci of a Number using recurssion:", FiboNacciRecurssion(8));


// const SinglePrimeNumber = (number) => {
//     if(number < 2) {
//        return true;
//     }
//     for(let i = 2; i <= Math.sqrt(number); i++) {
//         if(number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const MultiplePrimeNumber = (arr) => {
//     var primeNums = arr.filter((number) => {
//         if(number==1 || number==2) {
//             return true;
//         } else {
//             for(let i=2;i<=Math.sqrt(number);i++) {
//                 if(number%i == 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     });
//     return primeNums;
// }

// var arr = [1,2,4,7,11,12,15,17,19,21,27,29,43,44];
// console.log(SinglePrimeNumber(13));

// console.log(MultiplePrimeNumber(arr));


// Check the Balanced Paranthesis
// Solve this equation using stack

// https://leetcode.com/problems/valid-parentheses
// function removeBrackets(str) {
//     let arr = [];
//     for(let i = 0; i < this.str.length; i++) {
//         let char = this.str[i];
//         if(char === '(' || char === '{' || char === '[') {
//             this.arr.push(char);
//         }

//         if(this.arr.length == 0) {
//             return false;
//         }

//         switch(char) {
//             case ')': 
//                 if(this.arr[this.arr.length - 1] === '(') {
//                     this.arr.pop();
//                 } else {
//                     this.arr.push(char);
//                 }
//                 break;
//             case '}': 
//                 if(this.arr[this.arr.length - 1] === '{') {
//                     this.arr.pop();
//                 } else {
//                     this.arr.push(char);
//                 }
//                 break;

//             case ']': 
//                 if(this.arr[this.arr.length - 1] === '[') {
//                     this.arr.pop();
//                 } else {
//                     this.arr.push(char);
//                 }
//                 break;
//         }
//     }

//     console.log("Arr:", this.arr);
//     if(this.arr.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


// const expr = "(){{}}";
// const exprClosingBracket = "([{}]))";
// console.log(removeBrackets(expr));

// if (removeBrackets(exprClosingBracket)) {
//    console.log("Balanced");
// } else {
//    console.log("Not Balanced");
// }

// if (removeBrackets(exprClosingBracket)) {
//  console.log("Balanced");
// } else {
//  console.log("Not Balanced");
// }

// ([{}]){}{} --> Balanced
// ([{}]){}{}][ --> Not Balanced

// ([{}]) --> Balanced

// ||
// | { |
// | [ |
// | ( |

// Fibonacci -

// 0, 1 - for return
// 1, 2 - If statement

// === -1 (distinct)
// > -1 (Find the first duplicates)


// Sap Exam Asked
// console.log(findPermutations("aabc"))

// Merge Sort
// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

// Wave Sort
// var waved = waveSort([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85]);
// console.log(waved);

// function getMissingNo(arr) {
//     let n = arr.length;
//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     for (let i = 0; i < n; i++)
//         total -= arr[i];
//     return total;
// }

// Driver Code

// let arr = [ 1, 3 ];

// let miss = getMissingNo(arr);

// console.log(miss)

// const str = "Cyclone Asani likely to asdfasdfasdfasdfasdfasdfasdf intensify further, move towards Odisha and Andhra Pradesh.";
// const stringOfArray = str.split(" ");

// let max = 0;
// let finalString;

// console.log(stringOfArray);

// for(let i = 0; i < stringOfArray.length; i++) {
//    if(stringOfArray[i].length >= max) {
//        max = stringOfArray[i].length;
//        finalString = stringOfArray[i];
//    }
// }

// const arr = [5, 1, 2, 88, 'apple', 's', 73, 88, 'G', 2, 90, 10, "Hello", 'ssp'];

// 1st Eleminated characters and string from array --> 1st Promise
// Take distinct value from array --> 2nd Promise 

// console.log(finalString, max);

// const sortArr = (a, b) => {
//     if(a < b) {
//         return -1;
//     } else if(a > b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// const groupAnagrams = (arr) => {
//     let hashMap = new Map();
//     for(let i = 0; i < arr.length; i++) {
//         let element = arr[i].split("").sort(sortArr).join("").trim("");
//         console.log("Element:", element);
//         if(!hashMap.has(element)) {
//             hashMap.set(element, []);
//         }
//     }

//     console.log("before:", hashMap);

//     for(let i = 0; i < arr.length; i++) {
//         let element = arr[i].split("").sort(sortArr).join("").trim("");
//         if(hashMap.has(element)) {
//             hashMap.get(element).push(arr[i]);
//         }
//     }

//     console.log("after:", hashMap);
//     console.log("Values:", Array.from(hashMap.values()));
//     console.log("Values:", Array.from(hashMap.values()).sort((a, b) =>  a.length - b.length));
// }

// function sortArr(a, b) {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     if(a < b) {
//         return -1;
//     } else if(a > b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }




// console.log(groupAnagrams(["ati", "ait", "tia", "dog", "god"]));


// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]
