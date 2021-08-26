// Time Complexity - O(n * 2)
// Space Complexity - O(1) --> We are not creating any datastructure

const bubbleSort = (arr) => {
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

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(bubbleSort(arr))