/*

https://leetcode.com/problems/valid-palindrome/

125. Valid Palindrome
Easy
8.7K
8.2K
company
Facebook
company
Yandex
company
Adobe
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


*/

class Palindrome {
    constructor(str) {
        this.str = str;
    }

    isPalindrome() {
        let actualStr = this.str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let str = "";
        for(let i = actualStr.length - 1; i >= 0; i--) {
           str += actualStr[i];
        }
        if(str == actualStr) {
            return true;
        } else {
            return false
        }
    }
}

var isPalindrome = function(s) {
    const palindromClass = new Palindrome(s);
    console.log(palindromClass.isPalindrome());
};

isPalindrome("A man, a plan, a canal: Panama")