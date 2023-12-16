/*

Word break - https://leetcode.com/problems/word-break/description/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.


*/

class WordBreak_Class {
    constructor(str, wordDict) {
        this.str = str;
        this.wordSet = new Set(wordDict);
        this.memo = {};
    }
    
    isPossible(start) {
        if(start == this.str.length) {
            return true;
        }

        if(this.memo[start] != undefined) {
            return this.memo[start];
        }

        console.log("Memo 1:", this.memo)
        for(let end = start + 1; end <= this.str.length; end++) {
            let currentWord = this.str.slice(start, end);
            if(this.wordSet.has(currentWord) && this.isPossible(end)) {
                console.log("Memo 2:", this.memo)
                return this.memo[start] = true;
            } 
        }
        console.log("Memo 3:", this.memo)
        return this.memo[start] = false;
    }
    
}

var wordBreak = function(str, wordDict) {
   const workBrk = new WordBreak_Class(str, wordDict);
   return workBrk.isPossible(0);
}

console.log(wordBreak("cars", ["car","ca","rs"]));