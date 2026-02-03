/*

First Missing Positive - https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 

*/

class FindSmallest_Missing_Positive {
    constructor(nums) {
       this.nums = nums;
    }

    sortArr() {
        this.nums = this.nums.sort((a, b) => a - b);
    }

    findMissing_Positives() {
        this.nums = this.nums.filter((ss) => ss > 0);
        if(this.nums[0] != 1) {
            return 1;
        } else if(this.nums.length == 1) {
            if(this.nums[0] == 1) {
                return this.nums[0]+1;
            } else {
                return 1;
            }
        } else {
            for(let i = 1; i < this.nums.length; i++) {
                if(this.nums[i] - this.nums[i - 1] > 1) {
                   return this.nums[i - 1] + 1;
                }

                if(i === this.nums.length - 1) {
                    return this.nums[i] + 1;
                }
            }
        }
    }
}

var firstMissingPositive = function(nums) {
    const missingPositiveClass = new FindSmallest_Missing_Positive(nums);
    missingPositiveClass.sortArr();
    let result = missingPositiveClass.findMissing_Positives();
    console.log(result);
};


firstMissingPositive([1]);
firstMissingPositive([1, 1000]);
firstMissingPositive([1,2,0]);
firstMissingPositive([3,4,-1,1]);
firstMissingPositive([7,8,9,11,12])