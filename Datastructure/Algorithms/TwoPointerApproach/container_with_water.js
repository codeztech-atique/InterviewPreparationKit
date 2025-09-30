// https://leetcode.com/problems/container-with-most-water/description/

// Leetcode 11

// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Index →   0  1  2  3  4  5  6  7  8
// Height → [1, 8, 6, 2, 5, 4, 8, 3, 7]

//    8 |     |█       █           █
//    7 |     |█       █           █
//    6 |     |█   █   █           █
//    5 |     |█   █   █   █       █
//    4 |     |█   █   █   █   █   █
//    3 |     |█   █   █   █   █   █
//    2 |     |█   █ █ █   █   █   █
//    1 | █   █ █ █ █ █ █ █ █ █ █ █ █
//        0   1 2 3 4 5 6 7 8

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1


var maxArea = function(arr) {
    let left = 0, right = arr.length - 1, weight = 0, height = 0, result = 0;
    while(left != right) {
        if(arr[left] < arr[right]) {
            weight = right - left;
            height = Math.min(arr[left], arr[right]);
            result = Math.max(result, weight * height);
            left++;
        } else {
            weight = right - left;
            height = Math.min(arr[left], arr[right]);
            result = Math.max(result, weight * height);
            right--;
        }
    }
    // console.log("Result:", result);
    return result;
};