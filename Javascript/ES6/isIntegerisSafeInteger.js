function checkISInteger(data) {
   return Number.isInteger(data);
}

function checkISSafeInteger(data) {
    return Number.isSafeInteger(data);
 }

console.log("Is Integer:", checkISInteger(344));
console.log("Is SafeInteger:", checkISInteger(12345678901234567890));