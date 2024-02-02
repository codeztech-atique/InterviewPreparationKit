/*

https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

*/

var pivotIndex = function(nums) {
    let total = 0;
    let pivot = 0;
    let sum = 0;
    
    // Get the total value
    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    console.log("Total:", total)

    // Get the pivot elements
    for(let i = 0; i < nums.length; i++) {
        if(sum == (total - nums[i] - sum)) {
            return pivot = i;
        }
        sum += nums[i];
        console.log(nums[i], sum, total)
    }
    return -1;
};

// console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]));
// console.log(pivotIndex([2,1,-1]));
console.log(pivotIndex([-1,-1,-1,-1,-1,-1]));