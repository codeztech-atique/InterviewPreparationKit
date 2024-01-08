const mergeSort = (left, right) => {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

const merge = (arr) => {
    if(arr.length < 2) {
        return arr;
    } 
    let half = arr.length / 2;
    let left = arr.splice(0, half);
    return mergeSort(merge(left), merge(arr));
}

console.log(merge([2, 5, 10, 57 ,9, 12, 13]));
