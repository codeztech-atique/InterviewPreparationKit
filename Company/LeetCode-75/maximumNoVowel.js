/*

https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length

*/

// With N^2 time complexisty

// var maxVowels = function(s, k) {
//     let max = 0;
//     let count = 0;
//     let start = 0;
//     let end = k;
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   
   
//     while(start < end && end != s.length + 1) {
//         count = 0;
//         console.log(s.slice(start, end));
//         for(let i = start; i < end; i++) {
//             if(vowels.indexOf(s[i]) > -1) {
//                 count++;
//             }
//         }
//         max = Math.max(count, max);
//         start++;
//         end++;
//     }
//     console.log(max)
// };

// With O(n) time complexity
var maxVowels = function(str, k) {
    let max = 0;
    let count = 0;
    let start = 1;
    let vowels =new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for(let i = 0; i < k; i++) {
        if(vowels.has(str[i])) {
            count++;
        }
    }

    max = count;
    count = 0;

    for(let i = start; i < str.length; i++) {
        if(vowels.has(str[i])) {
            count++;
        }
        max = Math.max(max, count);
        console.log(start, k, i, str[i - (k - 1)], "---");
        if(start == k) {
            console.log(start, k, i, str[i - (k - 1)]);
            
            if(vowels.has(str[i - (k - 1)])) {
                console.log("Count here:", count, max);
                count--;
            }
        } else {
            start++;
        }
        //console.log(str.slice(i, str.length));
    }

    console.log(max);
}

maxVowels("weallloveyou", 7); // Output - 4
// maxVowels("tryhard", 4); // Output - 1
// maxVowels("abciiidef", 3); // Output - 3
// maxVowels("aeiou", 2); // Output - 2
// maxVowels("leetcode", 3); // Output - 2