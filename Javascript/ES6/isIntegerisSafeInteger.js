function checkISInteger(data) {
   return Number.isInteger(data);
}

function checkISSafeInteger(data) {
    return Number.isSafeInteger(data);
}

console.log("Is Integer:", checkISInteger("3443"));
console.log("Is SafeInteger:", checkISInteger(123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890));