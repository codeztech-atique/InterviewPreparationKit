var https = require('https');
https.get('https://coderbyte.com/api/challenges/json/age-counting',  (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            var arr = parsedData.data;
            let counter = 0;
            arr = arr.split(', ');
           
            for (let i=0;i<arr.length;i++) {
                let splitD = arr[i].split("=");
                if(splitD[0] === 'age' && !isNaN(parseInt(splitD[1]))) {
                    if(splitD[1] >= 50) {
                        counter++;
                    }
                }
            }
            console.log(counter);
        } catch (e) {
          console.log(e.message);
        }
      });

    
}).on("error", (err) => {
    console.log("Error: " + err.message);
  });

function parseData(str) {
    return Function(`'use strict'; return (${str})`)()
}
  
console.log(parseData("6*(4/2)+3*1")); 
console.log(parseData("6/3-1")); 

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
// console.log(findPermutations("aabc"))

//Wave Sort
// var waved = waveSort([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85]);
// console.log(waved);