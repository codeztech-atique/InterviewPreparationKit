/*

https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

class LongestConsecutive {
    constructor(nums) {
        this.nums = nums;
    }

    calculation() {
        let counter = 1;
        let longestStreak = 1;
        for(let i = 1; i < this.nums.length; i++) {
            if((this.nums[i] - this.nums[i - 1]) == 1) {
                counter++;
            } else if((this.nums[i] - this.nums[i - 1]) === 0) { 
                continue;
            } else {
                longestStreak = Math.max(longestStreak, counter);
                counter = 1;
            }
        }
        return Math.max(longestStreak, counter);
    }
}

var longestConsecutive = function(nums) {
    let sortNums = nums.sort((a, b) => a - b);
    console.log(sortNums);
    let longestConsecutiveClass = new LongestConsecutive(sortNums);
    console.log(longestConsecutiveClass.calculation());
};

longestConsecutive([100,4,200,1,3,2])
longestConsecutive([0,3,7,2,5,8,4,6,0,1])
longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])