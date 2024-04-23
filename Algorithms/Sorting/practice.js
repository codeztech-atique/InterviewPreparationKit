const quickSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length + 1; j++) {
            if(arr[i] <= arr[j]) {
                let temp = arr[j];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(quickSort([2, 5, 3, 0, 57, 9, 12, 13]));