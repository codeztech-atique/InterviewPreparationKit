// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Amazon Asked Question - 
// Use 2 Pointer Approcah -

// const nums = [2,5,7,11,15];
// const nums = [1,4,5,15];
// const target = 9;

// Another Example - 
const nums = [2,3,4];
const target = 6;

// Using recursion
const twoPointerApproachUsingRecursion = (arr, target) => {
    let start = 0, end = arr.length - 1;
    let diff = end - start;
    
    if(diff > 1 && start < end && (arr[start] + arr[end]) > target) {
        end--;
        arr.pop();
        twoPointerApproachUsingRecursion(arr, target);
    } else if(diff > 1 && start < end && (arr[start] + arr[end]) < target) {
        start++;
        arr.shift();
        twoPointerApproachUsingRecursion(arr, target);
    } else {
        if((arr[start] + arr[end]) == target) {
            console.log("Combination are:", arr[start], arr[end]);
            console.log("Array Index are:", start, end);
        } else {
            console.log("Sorry, No Combination found !!!");
        }
    }
}

// Using for Loop
const twoPointerApproachUsingLoop = (arr, target) => {
    let start = 0, end = arr.length - 1;
    let diff = end - start;
    let result = [];
    for(let i = start; i <= end;) {
        if(diff > 1 && start < end && (arr[start] + arr[end]) > target) {
            end--;
        } else if(diff > 1 && start < end && (arr[start] + arr[end]) < target) {
           start++;
        } else {
            if((arr[start] + arr[end]) === target) {
                console.log("Combination are:", arr[start], arr[end]);
                console.log("Array Index are:", start, end);
                result.push(start);
                result.push(end);
                break;
            } else {
                console.log("Sorry, No Combination found !!!");
                break;
            }
        }
    }
    return result;
}

// twoPointerApproachUsingRecursion(nums, target);
// console.log(twoPointerApproachUsingLoop(nums, target));