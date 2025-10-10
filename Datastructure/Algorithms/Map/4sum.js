// https://leetcode.com/problems/4sum/description/

var fourSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    for(let a = 0; a < nums.length; a++) {
        if(a > 0 && nums[a] == nums[a - 1]) {
            continue;
        }

        for(let b = a + 1; b < nums.length; b++) {
            if(b > a + 1 && nums[b] == nums[b - 1]) {
                continue;
            }

            let i = b + 1;
            let j = nums.length - 1;
            while(i < j) {
                if((nums[a] + nums[b] + nums[i] + nums[j]) > 0) {
                    i++;
                } else if((nums[a] + nums[b] + nums[i] + nums[j]) < 0) {
                    j--;
                } else {
                    result.push([nums[a], nums[b], nums[i], nums[j]]);
                    i++;
                    j--;
                    while(i < j && nums[i] == nums[i - 1]) i++;
                    while(i < j && nums[j] == nums[j + 1]) j--;
                }
            }
        }
    }
    return result;
}




// ✅ Test Cases
console.log(fourSum([1,0,-1,0,-2,2])); 
// Expected: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

console.log(fourSum([2,2,2,2,2])); 
// Expected: [[2,2,2,2]]

