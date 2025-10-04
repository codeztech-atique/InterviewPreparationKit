const binarySearch = (arr, target, start, end) => {
    if(start > end) return -1;
    let mid = Math.floor(start + (end - start) / 2);

    if(arr[mid] == target) {
        return mid;
    } else if(arr[mid] < target) {
        return binarySearch(arr, target, start + 1, end);
    } else {
        return binarySearch(arr, target, start, end - 1);
    }
}

const search = (arr, target) => {
    return binarySearch(arr, target, 0, arr.length - 1);
}

console.log(search([-1,0,3,5,9,12], 9));