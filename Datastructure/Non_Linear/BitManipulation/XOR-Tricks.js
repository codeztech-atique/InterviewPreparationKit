// === XOR-Tricks.js ===
// Common XOR tricks

// Find single number where every other number appears twice
function singleNumber(arr) {
  return arr.reduce((x, num) => x ^ num, 0);
}

// Swap without a temporary variable
function xorSwap(a, b) {
  console.log("Before swap:", a, b);
  a ^= b; b ^= a; a ^= b;
  console.log("After swap:", a, b);
}

// --- Examples ---
console.log("singleNumber([2,3,2,4,4]):", singleNumber([2,3,2,4,4])); // 3
xorSwap(5, 7); // should print swapped values
