// Container With Most Water || Using 2 Pointer Approch || O(n)

// https://leetcode.com/problems/container-with-most-water
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// Formula -> End Array Index - Start Array Index * ( minimum of 2 element)
// [1,8,6,2,5,4,8,3,7]

// First get the diff of array Index -> start and end

// Then multiple by lower value
// If start element > end element --> Move right pointer towards left
// If start element < end element --> Move left pointer towards right
// Stop = right == left

// (8  - 1) * 7 = 49

// Check this video for better understading - https://www.youtube.com/watch?v=ZHQg07n_tbg

const containerWithWater = (arr) => {
    let start = 0, end = arr.length - 1, diff = 0, calculation = 0, result = 0;
    while(start != end) {
        if(arr[start] >= arr[end]) {
            diff = end - start;
            calculation = diff * arr[end];
            console.log("End --", calculation);
            end--;
        } else if(arr[start] <= arr[end]){
            diff = end - start;
            calculation = diff * arr[start];
            console.log("Start --", calculation, end, (start + 1));
            start++;
        }
        
        if(calculation > result) {
            result = calculation;
        }
    }
    return result;
}

const arr = [1,8,6,2,5,4,8,3,7]; // Result 49
// const arr = [1, 1]; //Result 1
// const arr = [1, 2]; //Result 1
console.log(containerWithWater(arr));