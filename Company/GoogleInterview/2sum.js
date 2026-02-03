// https://leetcode.com/problems/two-sum/

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

// [2,7,11,15] || 9

// 7 - 0
// 2 - 1


const twoSum = (nums, target) => { // Using map
    var map = new Map();

    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if(map.get(num) === undefined) { 
            map.set(target-num, i);
            console.log(map);
        }
        else {
            return [map.get(num), i] 
        }
    }

    console.log(map);
}


const arr = [2,7,11,15];
console.log(twoSum(arr, 9));
