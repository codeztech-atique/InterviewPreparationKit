/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

*/

const slidingWindow = (arr, k) => {
    let chArr = [], finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(chArr.length === k) {
            finalArr.push(Math.max(...chArr));
            chArr.shift();
        }
        chArr.push(arr[i]);
    }

    if(chArr.length == k) {
        finalArr.push(Math.max(...chArr));
    }
    return finalArr;
}

const mainFunction = (arr, k) => {
    const result = slidingWindow(arr, k);
    console.log("Result:", result);
}

mainFunction([1,3,-1,-3,5,3,6,7], 3);