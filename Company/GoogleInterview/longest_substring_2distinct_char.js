// Algorithim Sliding Window

// Longest Substring with At Most Two Distinct Characters

// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/


// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.
// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.

// ccaabbb
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let mapData = new Map();
    let i = 0, j = 0;
    let result = "";

    while(j != s.length) { //ccaabbb
        let checkFesibility = checkFesibilityToStoreInMap(mapData, s[j]);
        if(checkFesibility) {
            mapData = storeInAmap(mapData, s[j], j);
        } else {
            
            let res = removeFromAmap(mapData);
            mapData = res.data;
            i = res.value;    
            // mapData = storeInAmap(mapData, s[j], j);    

            let str = s.slice(i, j);
            // str.reduce((a, b) => a + b, 0) // this will do the sum.
            // Math.min(...this.nums.slice(i, j));
            console.log(str);
            if(str.length > result.length) {
                result = str;
            }

           
            
        }
        j++;
    }

    console.log(mapData, result);
};

var checkFesibilityToStoreInMap = (mapData, char) => {
    if(mapData.has(char) && mapData.size <= 2) {
       return true;
    } else if(mapData.size < 2) {
        return true;
    }
    return false;
} 

var storeInAmap = (mapData, char, j) => { // Storing inside the Map
    mapData.set(char, j);
    return mapData;
}

var removeFromAmap = (mapData) => { // Removing from Map -- With smaller value
    let key = mapData.keys().next().value;
    let value = mapData.get(key);

    for(let i of mapData) {
       if(i[1] < value) {
          key = i[0];
          value = i[1];
       }
    }

    mapData.delete(key);

    return { 
        data: mapData,
        value: value
    };
}

// lengthOfLongestSubstringTwoDistinct("eceba"); // ece
lengthOfLongestSubstringTwoDistinct("ccaabbb"); // aabbb
// lengthOfLongestSubstringTwoDistinct("abadaaaafgh"); // adaaaa




