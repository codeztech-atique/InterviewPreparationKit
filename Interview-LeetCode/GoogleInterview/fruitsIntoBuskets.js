/// Very very important question for FAANG

// https://www.youtube.com/watch?v=hClCsJDcpSU -- Watch this 

// https://leetcode.com/problems/fruit-into-baskets/

        //    0  1  2  3  4  5  6  7  8  9  10
// let arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
           // s  
                       // e
// start = 3 
// end = 7

// In map
// 3: 2 --> Number || Index ( Remove X )
// 1: 6 --> Number || Index
// 2: 7 --> Number || Index

// max_length = 4 // (3, 3, 3, 1) (end - start) --> First Iteration
// max_length = 5 // (1, 2, 1, 1, 2) (end - start) --> Second Iteration

// We need to solve this approch with 2 pointer || or Sliding Window

const fruitsInTheBuskets = (array) => {
    let map = new Map(), max = -1
    for(let start = 0, end = 0; end < array.length; end++){
        let currElement = array[end]
        map.set(currElement, map.get(currElement)+1 || 1 )
        while(map.size > 2){
            let char = array[start]
            let charCount = map.get(char)
            if(charCount-1 === 0)map.delete(char)
            else map.set(char, charCount-1)
            start++
        }
        if(map.size >= 1)max = Math.max(max, end + 1 - start)
    }
    return max
}

// const arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]; // Answer 5
// const arr = [1,2,3,2,2]; // Answer 4
// const arr = [1,2,1]; // Answer 3 || This is done
// const arr = [0,1,2,2]  // Answer 3
// const arr = [1,2,3]  // Answer 2
// const arr = [1,0,3,4,3] // Answer 3
const arr = [1,1,0,0,3,3] // Answer 4
console.log("Original Array:", arr);
console.log(fruitsInTheBuskets(arr));
