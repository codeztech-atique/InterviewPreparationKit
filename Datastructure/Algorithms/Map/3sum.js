// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    // console.log("Sort:", nums);
    let result = [];
    for(let a = 0; a < nums.length; a++) {
        if(a > 0 && nums[a] == nums[a - 1]) {
            continue;
        }
        let i = a + 1;
        let j = nums.length - 1;
       
        while(i < j) {
            if((nums[a] + nums[i] + nums[j]) > 0) {
                j--;
            } else if((nums[a] + nums[i] + nums[j]) < 0) {
                i++;
            } else {
                // console.log(nums[a], nums[i], nums[j]);
                result.push([nums[a], nums[i], nums[j]]);
                i++;
                j--;

                while(i < j && nums[i] == nums[ i - 1]) i++;
            }
        }
    }
    return result;
};


console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]))
console.log(threeSum([0,1,1])); // Output: []
