/*

Valid Parentheses - https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

class Validarentheses {
    constructor(value) {
        this.str = value;
        this.arr = [];
    }

    isValid() {
        for(let i = 0; i < this.str.length; i++) {
            let char = this.str[i];
            if(char === '(' || char === '{' || char === '[') {
                this.arr.push(char);
            }

            if(this.arr.length == 0) {
                return false;
            }

            console.log("Array:", this.arr);

            switch(char) {
                case ')': 
                    if(this.arr[this.arr.length - 1] === '(') {
                        this.arr.pop();
                    } else {
                        this.arr.push(char);
                    }
                    break;
                case '}': 
                    if(this.arr[this.arr.length - 1] === '{') {
                        this.arr.pop();
                    } else {
                        this.arr.push(char);
                    }
                    break;

                case ']': 
                    if(this.arr[this.arr.length - 1] === '[') {
                        this.arr.pop();
                    } else {
                        this.arr.push(char);
                    }
                    break;
            }
        }

        console.log("Arr:", this.arr);
        if(this.arr.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

var isValid = function(s) {
    const isValidClass = new Validarentheses(s);
    const checkValidBraces = isValidClass.isValid();
    return checkValidBraces;
};

console.log(isValid("(){}[]"));
