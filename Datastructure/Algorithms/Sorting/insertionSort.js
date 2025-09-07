// Time Complexity - O(n * 2)
// Space Complexity - O(1) --> We are not creating any datastructure

// We need to use this sort when we know the list is almost sorted

const insertionSort = (arr) => {
    let startIndex = 0;
    for(let i = 1; i < arr.length; i++) {
       if(arr[i] < arr[i-1]) {
         startIndex = i;
         break;
       }
    }

    // Based on the index it will backtrack
    for(let i = 0; i <= startIndex; i++) {
        if(arr[i] < arr[i-1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            insertionSort(arr);
        }
    }

    return arr;
}

const arr1 = [6, 5, 3, 1, 8, 7, 2, 4];
const arr2 = [99, 44, 3, 6, 2, 1, 5, 63, 87, 2, 283, 4, 0];

console.log(insertionSort(arr1));
console.log(insertionSort(arr2))