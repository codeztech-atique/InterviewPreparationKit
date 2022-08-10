// https://leetcode.com/problems/minimum-window-substring/

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// https://www.youtube.com/watch?v=b9OgfHDFNlo

var minWindow = function(s, t) {
    let constMap = new Map();
    let i = 0, j = 0;
    let result = "", flag = false;
    t = convertSearchStringIntoMap(t);

    if(t.length > s.length) {
        return "";
    } if(t == s) {
        return t;
    } else {
        while(j != s.length) {
            if(!flag) {
                constMap = setSubStringInAMap(constMap, s[j]);
            }
           
            matchSubStringFromMap = searchSubStringInMap(constMap, t);
            console.log("Check Status:", matchSubStringFromMap);

            if(matchSubStringFromMap) {
                // console.log(i, j);
                let substr = s.substring(i, j+1);
                // console.log(substr);
                if(result == "") {
                    result = substr;
                } else if(substr.length < result.length) {
                    result = substr;
                }
                flag = true;
                
                
                constMap = removeCharFromMap(constMap, s[i++]); 
                
                // When we do i++ we need to remove the value from the Map and check against it
                if(i == s.length) {
                    break;
                }
               
            } else {
                flag = false;
                j++;
            }
        }
    }
    console.log("Final Map:", constMap);
    return result;
};

const convertSearchStringIntoMap = (str) => {
    let map = new Map();
    for(let i = 0; i < str.length; i++) {
        if(map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1);
        }
    }
    return map;
}

var setSubStringInAMap = (constMap, mappedChar) => {
    // 1st Step Store in the MAP
    
    if(constMap.get(mappedChar)) {
        constMap.set(mappedChar, constMap.get(mappedChar) + 1);
    } else {
        constMap.set(mappedChar, 1);
    }
    return constMap;
    
}

const searchSubStringInMap = (constMap, searchStringMap) => {
    // 2nd Step Need to Check Map data getting match with searchString or not || If match then return true else false
    console.log("searchStringMap - ", searchStringMap);
    console.log("constMap - ", constMap);
    for(let key of searchStringMap) {
        // console.log(key[0], "--->", constMap.has(key[0]))
        if(!constMap.has(key[0])) {
            return false;
        } else if(constMap.has(key[0]) && constMap.get(key[0]) < key[1]) {
            return false;
        } 
    }
    return true;
}

const removeCharFromMap = (constMap, value) => {
    console.log("Before = ", constMap, value);
    if(constMap.has(value)) {
        if(constMap.get(value) > 1) {
            constMap.set(value, constMap.get(value) - 1);
        } else {
            constMap.delete(value);
        }
    }
    console.log("After = ", constMap, value);
    return constMap;
}

console.log(minWindow("BBAA", "ABA")); // BAA
// console.log(minWindow("AA", "AA")); // AA

// console.log(minWindow("ABBAACDBCAB", "ABC")); // BCA
// console.log(minWindow("ADOBEACODEBANC", "ABC")); // BEAC
// console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC

// console.log(minWindow("AB", "A")); // A
