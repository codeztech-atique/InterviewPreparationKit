/*

https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


*/

class LongestSubString {
    constructor(value) {
        this.arr = [];
        this.str = value;
    }
    
    findCombination() {
        for(let i = 0; i < this.str.length; i++) {
            for(let j = i + 1; j < this.str.length + 1; j++) {
                this.arr.push(str.slice(i, j));
            }
        }
        return this.arr;
    }

    findPlanidrom(str) {
        let ss = "";
        for(let i = str.length - 1; i >= 0; i--) {
           ss += str[i];
        }
        if(ss.length > 1 && ss == str) {
            return true;
        } else {
            return false;
        }
    }

    findLongestPalindrom(arr) {
       let index = 0, len = 0;
       for(let i = 0; i < arr.length; i++) {
            if(arr[i].length > len) {
                len = arr[i].length;
                index = i;
            }
       }
       return arr[index];
    }

}

const longestSubstring = (str) => {
    let longestSubstring = new LongestSubString(str);
    let getCombination = longestSubstring.findCombination();
    let palindromString = [];
    console.log("Combination:", getCombination)
    for(let i = 0; i < getCombination.length; i++) {
        if(longestSubstring.findPlanidrom(getCombination[i])) {
            palindromString.push(getCombination[i]);
        }
    }
    console.log(palindromString);

    // Find the longest palindrom 
    let longestStr = longestSubstring.findLongestPalindrom(palindromString);
    console.log("Result:", longestStr)
    return longestStr;
}

let str = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir";
console.log("Logest substring:", longestSubstring(str));