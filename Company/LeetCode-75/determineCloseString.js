/*

https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

Determine 2 strings are close.

*/

var closeStrings = function(word1, word2) {
    if(word1.length == word2.length) {
        let firstWord = word1.split("");
        let secondWord = word2.split("");
        let obj1 = {}, obj2 = {};
       
        // Get the first frequency
        for(let ss of firstWord) {
           obj1[ss] = ( obj1[ss] || 0 ) + 1
        }

        // Get the second frequency
        for(let ss of secondWord) {
            obj2[ss] = ( obj2[ss] || 0 ) + 1
        }

        // Get the match
        for(let ss in obj1) {
           console.log(obj1, obj2) 
           for(let pp in obj2) {
                if(obj1[ss] == obj2[pp]) {
                    delete obj1[ss];
                    delete obj2[pp];
                    break;
                }
           }
        }
        
        if(Object.keys(obj1).length == 0 && Object.keys(obj2).length == 0) {
            return true;
        } else {
            return false;
        }
        
    } else {
        return false;
    }
};

// console.log(closeStrings("cabbba", "cbbacc"));
console.log(closeStrings("uau", "ssx"));