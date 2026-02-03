// Input example: [<2,5>, <4,5>, <4,5>]

// Output: 244, 245, 254, ..., 344, 345, ...


class Problem {
    constructor(arr) {
        this.root = arr; 
        this.cache = new Map();
    }
  
    isCache(key) {
       if(this.cache.has(key)) {
          return true;
       } else {
          return false;
       }
    }
  
    findSeq(lowerBound, upperBound) {
        const arr = [];
        for(let i = lowerBound; i <= upperBound; i++) {
           arr.push(i);
        }
        return arr;
    }
  
    generatedTwoDArray() {
       const fnArr = [];
       for(let i = 0; i < this.root.length; i++ ) {
          for(let j = 0; this.root[i].length; j++) {
              let lowerBound = this.root[i][0];
              let upperBound = this.root[i][1];
              
              let arr = this.findSeq(lowerBound, upperBound);
              fnArr.push(arr);
          }
       }
       return fnArr;
    }
  
    solution() {
       let arr = this.generatedTwoDArray();
       let str = "";
       let counter = 0;
       for(let i = 0; i < arr.length;) {
          for(let j = counter; j < arr[i].length; j++) {
             str += arr[i][j];
             break;
          }
          
          if(str.length == arr.length && !this.isCache(str)) {
             this.cache.set(str, str);
             str = "";
             counter++;
          }
          
          if(j == arr[i].length - 1) {
              counter = 0;
              i++;
          }
       }
       return this.cache;
    }
}

const arr = [
  [2,5],
  [4,5],
  [1,5]
];


const arr2 = [
  [2,4,5],
  [4,5],
  [1,2,3,4,5]
]



// solution(arr2) -> 245, 45, 12345

// Expected: 241,242,243,244,...

const problem = new Problem(arr);
console.log(problem.solution());
