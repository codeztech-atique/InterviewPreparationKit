// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"

// Input: s = "2-5g-3-J", k = 2
// Output: "2-5G-3J"

const licenseKeyFormatting = (str, k) => {
    str = str.split("-").join("").toUpperCase();
    let rem = str.length % k;
    let res = "";
    if(rem > 0) {
        res = str.slice(0, rem); 
    }
    for(let i = rem; i < str.length; i = i + k) {
        res = res +(res.length ? '-' : '')+ str.slice(i, i + k);
    }
    return res; 
}

// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
// console.log(licenseKeyFormatting("B-5g-3-J", 2));

