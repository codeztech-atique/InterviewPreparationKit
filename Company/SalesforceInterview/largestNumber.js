/*

https://leetcode.com/problems/largest-number/description/

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"


*/

class LargestNumber {
    constructor(nums) {
        this.nums = nums;
    }

    calculation() {
        let customCompare = (a, b) => {
            let first = '' + a + b;
            let second = '' + b + a;
            return second - first;
        }
        this.nums = this.nums.sort(customCompare);
        this.nums = this.nums.join("");

        let trimmedZero = this.nums.replace(/^0+/, '');
        return trimmedZero || '0';
    }
}

var largestNumber = function(nums) {
    const largestNum = new LargestNumber(nums);
    return largestNum.calculation();
};