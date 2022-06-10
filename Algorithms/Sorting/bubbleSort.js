// Time Complexity - O(n * 2)
// Space Complexity - O(1) --> We are not creating any datastructure

// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0]; --> New Array -> 1st Step
// [44, 6, 99, 2, 1, 5, 63, 87, 283, 4, 0]; --> New Array -> 1st Step
// [6, 44, 99, 2, 1, 5, 63, 87, 283, 4, 0]; --> New Array -> 1st Step

const bubbleSort = (arr) => { // [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
           // Using Third Variable
           let temp = arr[i];
           arr[i] = arr[i - 1];
           arr[i - 1] = temp;
        }
    }

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            bubbleSort(arr);
        }
    }   
    return arr;
}


// Bubble sort -->

// 1. Nested Loop


// const bubbleSort = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] >= arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(bubbleSort(arr));


