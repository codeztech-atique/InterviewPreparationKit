/*

https://leetcode.com/problems/increasing-triplet-subsequence/description


*/

var increasingTriplet = function(nums) {
    let firstMin = Infinity;
    let secondMin = Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= firstMin) {
            firstMin = nums[i];
        } else if(nums[i] <= secondMin) {
            secondMin = nums[i];
        } else {
            return true;
        }
    }
    return false;
}

increasingTriplet([1,6,2,5,1])
increasingTriplet([1,2,3,4,5])
increasingTriplet([1,5,0,4,1,3])
