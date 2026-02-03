/*

Generate Parentheses - https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

*/


class GenerateParanthesis {
    constructor(n) {
        this.limit = n;
        this.combination = [];
        this.generateCombination(this.limit, "", 0, 0);
    }

    generateCombination(limit, str, open, close) {
        if(str.length === limit * 2) {
            this.combination.push(str);
        }

        if(open < limit) {
            this.generateCombination(limit, str+"(", open + 1, close)
        } 

        if(close < open) {
            this.generateCombination(limit, str+")", open, close + 1)
        }
    }
}

var generateParenthesis = function(n) {
    let generateParanthesisClass = new GenerateParanthesis(n);
    
    console.log(generateParanthesisClass.combination);
};

generateParenthesis(3);