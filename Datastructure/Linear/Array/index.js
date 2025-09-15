

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
// strings.push('e'); //O(1) --> Happening to end of the array

//pop
// console.log(strings.pop()); //O(1) --> Happening to end of the array
// console.log(strings.pop()); //O(1) --> Happening to end of the array

//unshift
// strings.unshift('x') //O(n) --> Inserting to beginning of the array

//shift
// strings.shift() //O(n) --> Happening to beginning of the array (remove from the beginning from the array)


//splice
// strings.splice(2, 0, 'alien'); //O(n/2) => //O(n) -> Index the 2 position and shift the rest entire array




// arr.push(99);
// console.log(arr);
// arr.pop(99);

// console.log(arr);

// console.log("Array Shift Elements : " + arr.shift());
// console.log(arr);

// arr.unshift(89);
// console.log(arr);


// console.log(arr[2]) // O(1)


const arrObject = [
    {
        name: 'Atique Ahmed',
        percentage: 45
    },
    {
        name: 'Sunny Singh',
        percentage: 43
    },
    {
        name: 'Vasu',
        percentage: 56
    },
    {
        name: 'Jitender',
        percentage: 100
    },
]

// for(let i = 0; i < arr.length; i++) { // O(N*2)
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[i] >= arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);

// function arraySort(a, b) { // O(n)
//    return a - b;
// }

// function arrayObjectSort(a, b) { // O(n)
//     return b.percentage - a.percentage;
//  }

// console.log(arr.sort(arraySort));

// console.log(arrObject.sort(arrayObjectSort));

const arr = [4, 5, 6, 7, 10, 12, 41, 62];
// arr.splice(0, 2, '222')
// console.log(arr);

console.log(arr.slice(0, 4));


function arrStrSort(a, b) {
    var nA = a.toLowerCase();
    var nB = b.toLowerCase();
    if(nA < nB) {
        return -1;
    }
    else if(nA > nB) {
        return 1;
    }
    return 0;
}


const arrStr = ['sunny', 'atique', 'hello', 'bollow', 'collow'];
console.log(arrStr.sort(arrStrSort));
