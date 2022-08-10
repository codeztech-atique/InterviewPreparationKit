// https://leetcode.com/problems/plus-one/



var plusOne = function(digits) {
    let nums = digits.join('');
    let result = [];
    let carry = 0;
    for(let i = nums.length - 1; i >=0; i--) {
        if(i === nums.length - 1) {
            let newValue = parseInt(nums[i]) + 1;
            if(newValue === 10) {
                carry = 1;
                result.unshift(0);
            } else {
                result.unshift(newValue);
            }
        } else {
            if(carry > 0) {
                let sum = parseInt(nums[i]) + carry;
                if(sum === 10) {
                    carry = 1;
                    result.unshift(0);
                } else {
                    result.unshift(parseInt(sum));
                    carry = 0;
                }
            } else {
                result.unshift(parseInt(nums[i]))
            }
        }
    }
    if(carry > 0) {
        result.unshift(carry)
        carry = 0;
    }
    return result;
};


const digits = [1,2,3];
// const digits = [1,2,9];
// const digits = [9, 9];
console.log(plusOne(digits));



// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].