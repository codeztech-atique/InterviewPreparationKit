function CheckisFinite(data) {
   return isFinite(data);
}

function CheckisNan(data) {
   return isNaN(data);
}

console.log("Is Finite:", CheckisFinite(342e124));
console.log("Is NaN:", CheckisNan(NaN));