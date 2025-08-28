// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


class TwoSum {
    constructor(nums, target) {
        this.nums = nums;
        this.target = target;
    }

    calculation() {
        let flag = false;
        for(let i = 0; i < this.nums.length; i++) {
            for(let j = i + 1; j < this.nums.length; j++) {
                if(this.nums[i] + this.nums[j] == this.target) {
                    result.push(i);
                    result.push(j);
                    flag = true;
                }
            }
            if(flag) {
                break;
            }
        }
        return result;
    }
}




// const nums = [3,2,4];
// const target = 6;

// const nums = [2,7,11,15];
// const target = 9;

const nums = [3, 3];
const target = 6;

const result = [];


const twoSumClass = new TwoSum(nums, target); 
console.log(twoSumClass.calculation());


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

