function binarySearch(arr, item, start, end) {
    if (start >= end) {
        return (item > arr[start]) ? (start + 1) : start;
    }

    let mid = Math.floor((start + end) / 2);

    if (item === arr[mid]) {
        return mid + 1;
    }

    if (item > arr[mid]) {
        return binarySearch(arr, item, mid + 1, end);
    }

    return binarySearch(arr, item, start, mid);
}

function binaryInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        let j = i - 1;

        // Find the position where the current item should be inserted
        let location = binarySearch(arr, item, 0, j);

        // Move all elements after the location to create space
        while (j >= location) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = item;
    }
    return arr;
}

// Example array
let array = [37, 9, 82, 12, 35, 17, 40, 5];
console.log('Sorted Array:', binaryInsertionSort(array));
