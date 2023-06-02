// https://leetcode.com/problems/next-permutation/

// Youtube Video - https://www.youtube.com/watch?v=TOvWyFT0xCw


// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]


// Step 1 - From the right ->  arr[i] > arr[i - 1] If Success store in IDX false -> Make in Asc Order
// Step 2 - Loop from IDX -> Last -> Find Each Element greater than (IDX - 1) and less than IDX swap between two
// Step 3 - Reverse Order from IDX to Last


// arr[i] < arr[i-1] -> Calculated from the back side array
// [1, 5, 8, 4, 7, 6, 5, 3, 1]; -> 7 > 6 => Store 7 and Index - 4 --> IDX
// Find IDX - 1 || which is 4, then we need to find 4 closest > any element and less then IDX -> 7 --> Answer 5
//  [1, 5, 8, 5, 7, 6, 4, 3, 1]; || Swap 2 element
// Next Permutation -> [1, 5, 8, 5, 1, 3, 4, 6, 7]


// [1, 5, 8, 4, 7, 6, 5, 3, 1];


function sortArr(a, b) {
    return a - b;
}

// Question - 1, 5, 8, 4, 7, 6, 5, 3, 1;
const nextPermutation = (nums) => {
   // First get the IDx
   let idx = -1;
   let prevIdx = 0;
   let swapElementIndex = 0;
   for(let i = nums.length - 1; i > 0; i--) {
      if(nums[i] > nums[i - 1]) {
        idx = i;
        break;
      }
   }
   
   if(idx == -1) {
     // Reverse the numsay Desc
     return nums.sort(sortArr);
   } else {
        console.log("IDX:", nums[idx]);
        // Get the previous IDX
        prevIdx = idx - 1;

        // Find the Element which is greater than prevIdx and less than idx
        for(let i = idx; i < nums.length; i++) {
            if(nums[i] > nums[prevIdx] && nums[i] <= nums[idx]) {
                swapElementIndex = i;
            }
        }

        // Swap the prevIdx with SwapElementIndex
        let temp = nums[prevIdx];
        nums[prevIdx] = nums[swapElementIndex];
        nums[swapElementIndex] = temp;
       
        // console.log(nums);
        // Swap the entire numsay from Idx
        let first = nums.slice(0, idx);
        let second = nums.slice(idx, nums.length).reverse();

        nums = first.concat(second);
        console.log(nums[prevIdx], "Swap:"+swapElementIndex);
   }
   return nums;
}

// const arr = [1, 5, 8, 4, 7, 6, 5, 3, 1]; // Answer -> [1, 5, 8, 5, 1, 3, 4, 6, 7]
// const arr = [1,2,3];
// const arr = [1,1,5]; 
// const arr = [5, 4, 3, 2, 1];
const arr = [1,3,2]; // [ 2, 1, 3 ]
console.log(nextPermutation(arr));