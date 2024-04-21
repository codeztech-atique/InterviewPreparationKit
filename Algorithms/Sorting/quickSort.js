// Divide and conquer

// Time Complexity - O(n * 2)
// Space Complexity - O(log(n))

const arr = [54, 52, 34, 31, 67, 22, 90];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


console.log(quickSort(arr));

