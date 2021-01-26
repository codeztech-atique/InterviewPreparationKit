const SinglePrimeNumber = (data) => {
    
}

// Braces Program Find the Balance String 
// const expr = "(}";

// if (removeBrackets(expr)) {
//    console.log("Balanced");
// } else {
//    console.log("Not Balanced");
// }


// Find the Duplicates Hash table
// var arr2 = [22,5,22,90,3,44,1,2];
// console.log(findDuplicatesUsingHash(arr2));


// Recursion of Below Problem
// console.log(sum(1)(2)(32)());


// Find the count of each elements from the array
// var arr = ["atique","atique","sunny","ahmed","sunny"];
// console.log(findCountOfEachElementsOfArray(arr));


// Find the distint elements
// var arr = [4,1,2,1,5,5,5,5,4,7];
// console.log(findDistinct(arr));


// Find Repeating and Non Repeating Elements

// var arr = [4,1,2,1,2];
// console.log(repetingElements(arr))
// console.log(nonRepetingElements(arr))

// GCD and LCM
// GCDandLCM(72, 120);
// GCD:- 24
// LCM:- 360


// Fibonacci Number

// console.log("FiboNacci of a Number:", FiboNacci(8));
// console.log("FiboNacci of a Number using recurssion:", FiboNacciRecurssion(8));

// Prime Number
// var arr = [1,2,4,7,11,12,15,17,19,21,27,29,43,44];
// console.log(SinglePrimeNumber(7));

// console.log(MultiplePrimeNumber(arr));


// Fibonacci -

// 0, 1 - for return
// 1, 2 - If statement

// === -1 (distinct)
// > -1 (Find the first duplicates)


// Sap Exam Asked

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
}

let permutationsArray = [];
  for (let i = 0; i < string.length; i++){
    let char = string[i]
    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray;
}

console.log(findPermutations("aabc"))