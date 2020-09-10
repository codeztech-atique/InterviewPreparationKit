function CheckisFinite(data) {
   return isFinite(data);
}

function CheckisNan(data) {
   return isNaN(data);
}

console.log("Is Finite:", CheckisFinite("asdfadsf"));
console.log("Is NaN:", CheckisNan("12321323"));