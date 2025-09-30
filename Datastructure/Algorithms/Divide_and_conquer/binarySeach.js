
// https://leetcode.com/problems/binary-search/description/?utm_source=chatgpt.com

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const binarySearch = (arr, target, start, end) => {
    if(start > end) return -1;

    const mid = Math.floor(start + (end - start) / 2);

    if(arr[mid] == target) {
        return mid;
    } else if(arr[mid] < target) {
        return binarySearch(arr, target, start + 1, end);
    } else {
        return binarySearch(arr, target, start, end - 1);
    }
    
}

var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

binarySearch([-1,0,3,5,9,12], 9);