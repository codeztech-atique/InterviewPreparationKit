function decimalToBinary(num) {
  if (num === 0) return "0";

  let binary = "";
  while (num > 0) {
    binary = (num & 1) + binary;  // grab lowest bit, prepend
    num = num >>> 1;              // shift right by 1 (same as divide by 2)
  }
  return binary;
}

console.log(decimalToBinary(3)); // "11"