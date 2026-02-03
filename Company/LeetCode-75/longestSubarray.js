/*

Longest Sub-Array after deleting 1 Elements - 

*/


var longestSubarray = function(nums) {
    let maxLength = 0; 
    let count = 0;
    let left = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
           count++;
        }
        while(count > 1) {
            if(nums[left] == 0) {
               count--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, i - left);
    }
    console.log("Maximum:", maxLength)
};

// longestSubarray([1,1,0,1]); // 1
longestSubarray([0,1,1,1,0,1,1,0,1])