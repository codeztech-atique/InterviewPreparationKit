// https://leetcode.com/problems/multiply-strings/

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

//     2 3
//     3 4
//    -----
//     9 2   -> Carry - 1
//   6 9
// -------------
//   7 8 2

const multiply = function(num1, num2) {
    let result = "", carry = 0;
    
    if(num1.length < num2.length) {
        num1 = num1.padStart(num2.length, "0"); // "0005"
    } else if(num1.length > num2.length) {
        num2 = num2.padStart(num1.length, "0"); // "0005"
    }

};

console.log(multiply("12", "33"));

// console.log(multiply("123456789", "987654321")); // "121932631112635269"

