/*
https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

*/

var longestOnes = function(nums, k) {
    let left = 0;
    let maxLength = 0;
    let count = 0;

    // Get the max in the first iteration
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            count++;
        }
        
        while(count > k) {
            if(nums[left] == 0) {
                count--;
            }
            left++;
        }
        console.log("Left:", left);
        maxLength = Math.max(maxLength, i - left + 1);
    }
    console.log(maxLength, " Value ")
};


// longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2);
// longestOnes([0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0], 3);
longestOnes([0,0,4,5,0,0,6,7,8,0,9,3,0,0,0,2,2,5,6], 3); // 10