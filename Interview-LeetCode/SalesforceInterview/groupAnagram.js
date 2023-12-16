/*

Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

class Anagram_Groups_Class {
    constructor() {
        this.strs = [];
        this.obj = {};
        this.anagramResult = [];
    }

    assignElements(strs) {
        this.strs = strs;
    }

    findSameElements() {
        console.log("Strs find elements:", this.strs)
        this.strs.forEach((s1) => {
            s1 = s1.split('').sort(this.sortAcendingOrder).join("").trim();
            this.obj[s1] = (this.obj[s1] | 0 ) + 1
        })
        console.log("Object value:",this. obj)
        return Object.keys(this.obj).length == 1 ? true : false;
    }

    sortFinalArray(a, b) {
        return a.length - b.length;
    }

    groupAnagrams(strs) {
        const anagrams = new Map();
        for(let i = 0; i < strs.length; i++) {
            let elements = strs[i].split("").sort().join("").trim();
            if(!anagrams.has(elements)) {
                anagrams.set(elements, []);
            }
            anagrams.get(elements).push(strs[i])
        }
        return Array.from(anagrams.values())
      }
    

    sortAndCompare_Word(actualStr, compareStr) {
        actualStr = actualStr.split("").sort(this.sortAcendingOrder).join("").trim("");
        compareStr = compareStr.split("").sort(this.sortAcendingOrder).join("").trim("");
        return actualStr === compareStr;
    }

    sortAcendingOrder(a, b) {
        let a1 = a.toLowerCase();
        let b1 = b.toLowerCase();
        if(a1 < b1) {
            return - 1
        } else if(a1 > b1) {
            return 0;
        } else {
            return 1;
        }
    }
}

var groupAnagrams = function(strs) {
    let findGroupAnagram = new Anagram_Groups_Class();
    strs = strs.sort(findGroupAnagram.sortAcendingOrder);

    findGroupAnagram.assignElements(strs)

    findGroupAnagram.findSameElements();

    findGroupAnagram.groupAnagrams(strs);

    // let result = findGroupAnagram.anagramResult.sort(findGroupAnagram.sortFinalArray);
    let result = findGroupAnagram.groupAnagrams(strs);
    console.log(result)
};

// groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
// groupAnagrams([""])
// groupAnagrams(["", "", ""])
groupAnagrams(["ati", "ait", "tia", "dog", "god"])