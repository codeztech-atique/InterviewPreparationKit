// Merge Sort

const merge = (left, right) => {
    const arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}

const mergeSort = (arr) => {
    const half = arr.length / 2;

    if(arr.length < 2) {
        return arr;
    }

    let left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([2, 5, 3, 0, 57, 9, 12, 13]));