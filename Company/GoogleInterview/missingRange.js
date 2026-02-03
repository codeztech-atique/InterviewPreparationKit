// https://leetcode.com/problems/missing-ranges/

// Example 1:

// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: ["2","4->49","51->74","76->99"]
// Explanation: The ranges are:
// [2,2] --> "2"
// [4,49] --> "4->49"
// [51,74] --> "51->74"
// [76,99] --> "76->99"

var findMissingRanges = function(nums, lower, upper) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            if(nums[i] > lower) {
                let inc = nums[i] - 1;
                console.log("coming 1", lower, "->" ,inc)
                if(inc == lower) {
                    result.push(lower.toString());
                } else {
                    result.push(lower+"->"+inc);
                }
            }
        } 

        if(i > 0 && i < nums.length) {
            if((nums[i] - nums[i-1]) == 2) {
                console.log("coming 2")
                result.push((nums[i-1] + 1).toString());
            } else if((nums[i] - nums[i-1]) > 2) {
                console.log("coming 3")
                result.push((nums[i-1] + 1)+"->"+(nums[i] - 1))
            }
        }

        if(i == nums.length - 1) {
            if(nums[i] < upper) {
                let inc = nums[i] + 1;
                if(inc === upper) {
                    result.push(inc.toString());
                } else {
                    result.push(nums[i] + 1 +"->"+upper);
                }
                
            }
        }
    }
    if(nums.length === 0) {
        if(lower === upper) {
            result.push(lower.toString())
        } else {
            result.push(lower+"->"+upper)
        }
    }

    if(lower < 0 && upper < 0) {
        if((lower - upper) < 0) {
            result = [];
            if((lower - upper) == -1) {
                result.push(lower.toString());
            } else {
                console.log(lower, upper, 'asdf')
                result.push(lower+"->"+upper);
            }
        }
    }

    console.log(result)
};

// findMissingRanges([0,1,3,50,75], 0, 99);
// findMissingRanges([-1], -1, -1);
// findMissingRanges([], -2, -1);
// findMissingRanges([], -3, -1);
// findMissingRanges([-1], -1, 0);
// findMissingRanges([-1], -2, 0);
// findMissingRanges([2], 0, 9);
findMissingRanges([6,8,9], 0, 9);