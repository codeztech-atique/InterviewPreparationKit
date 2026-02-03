// https://leetcode.com/problems/add-strings/
// Easy

// Remove console log you don't get time limit exceeded error

const addString = (num1, num2) => {
    let result = "", carry = 0;
    
    if(num1.length < num2.length) {
        num1 = num1.padStart(num2.length, "0"); // "0005"
    } else if(num1.length > num2.length) {
        num2 = num2.padStart(num1.length, "0"); // "0005"
    }

    console.log("Two Numbers are:", num1, num2);
    for(let i = num1.length - 1; i >= 0; i--) {
        console.log(num1[i], num2[i])
        let lst = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = 0;
        console.log(num1[i], num2[i], '-', lst, "Result-"+result);
        if(lst >= 10) {
            let rem = lst % 10;
            carry = Math.floor(lst / 10);
            console.log("Remender:"+ rem, "Carry:"+carry)
            result = rem  + result;
        } 
        else {
            lst = carry !== 0 ? lst + carry : lst;
            console.log("Lst are:"+lst, "result:"+result)
            result = lst + result;
        }
    }
    if(carry > 0) {
        result = carry+""+result;
    }
    return result;
}

console.log(addString("456", "77")); // 88
// console.log(addString("1", "9")); // 88