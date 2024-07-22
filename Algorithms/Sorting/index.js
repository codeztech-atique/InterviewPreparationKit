const merge = (left, right) => {
    let arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex]);
            leftIndex++;
        } else {
            arr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    
    const half = Math.floor(arr.length / 2);
    const left = arr.slice(0, half);
    const right = arr.slice(half);
    
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 5, 3, 0, 57, 9, 12, 13]));
