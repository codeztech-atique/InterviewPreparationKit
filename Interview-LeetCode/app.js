const arrResult = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes("@")) {
            let email = arr[i].split("@");
            let redgexEleminateDot = /[.]/g;
            if(email[0].includes("+")) {    
               let considerFirstWord = email[0].split("+");
               considerFirstWord = considerFirstWord.shift();
               arr[i] = considerFirstWord.replace(redgexEleminateDot, "") + "@" +email[1];
            } else if(email[0].includes(".")) {
               arr[i] = email[0].replace(redgexEleminateDot, "") + "@" +email[1];
            }
        }
    }
    return findDistinct(arr);
}

const findDistinct = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}

var arr = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
// var arr = ["test.email+alex@leetcode.com", "test.email@leetcode.com"];
console.log(arrResult(arr));