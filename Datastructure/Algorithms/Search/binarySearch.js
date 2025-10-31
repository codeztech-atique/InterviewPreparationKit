// Binary Search - Always use the divide and concer - Always page will be sorted.

const search = (arr, target, start, end) => {
    let mid = Math.floor(start + (end - start) / 2);
    if(arr[mid] == target) {
        return mid;
    } else if(arr[mid] < target) {
        return search(arr, target, mid + 1, end)
    } else {
        return search(arr, target, start, mid - 1);
    }
}

const binarySearch = (nums, target) => {
    return search(nums, target, 0, nums.length - 1);
}

console.log(binarySearch([-1,0,3,5,9,12], 9));