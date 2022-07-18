// Problem - Medium using Sliding Window Approch || Solved by own

// Longest Substring with out repeating characters. 

const longestSubstring = (s) => {
    console.log("Original String:", s);
    let res = "";
    let str = "";
    let storeString = [];
    let index = 0;
    for(let i = 0; i < s.length; i++) {
       if(res.includes(s[i])) {
          
          index = res.indexOf(res);
          console.log(res, "Track ----->", index);
          res = res.slice(index+1, res.length);
        //   res += s[i];
          console.log("Result:"+res);
          i--;
       } else {
          res += s[i];
          console.log(res);
       }
       if(res && storeString.indexOf(res) == -1) {
          storeString.push(res);
       }
    }

    if(storeString.length > 0) {
        str = storeString[0];
    }
    for(let i = 1; i < storeString.length; i++) {
        if(storeString[i].length > str.length) {
            str = storeString[i];
        }
    }

    console.log(storeString);


    return str;
}

// using
// dvdf

// dv --> Before remove store into array


const str = "abcabcbb";
// const str = "bbbbbbbb";
// const str = "pwwkew";
// const str = "aaaabbbb"; // 2
// const str = "aab"; // 2
// const str = "dvdf"; // 3

console.log(longestSubstring(str));