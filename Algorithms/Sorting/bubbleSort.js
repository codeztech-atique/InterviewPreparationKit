
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

const arr = [3, 6, 12, 44, 41, 90, 22, 1];
console.log(bubbleSort(arr))