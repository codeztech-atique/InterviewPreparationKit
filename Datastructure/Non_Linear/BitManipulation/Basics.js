// === Basics.js ===
// Bitwise basics: set, clear, toggle, check, count bits

// Check if ith bit is set
function isBitSet(n, i) {
  return (n & (1 << i)) !== 0;
}

// Set ith bit
function setBit(n, i) {
  return n | (1 << i);
}

// Clear ith bit
function clearBit(n, i) {
  return n & ~(1 << i);
}

// Toggle ith bit
function toggleBit(n, i) {
  return n ^ (1 << i);
}

// Count set bits (Brian Kernighan’s Algorithm)
function countBits(n) {
  let count = 0;
  while (n) {
    n &= (n - 1); // clear lowest set bit
    count++;
  }
  return count;
}

// --- Examples ---
console.log("isBitSet(5,0):", isBitSet(5,0)); // true (5=101, bit0=1)
console.log("setBit(5,1):", setBit(5,1));     // 7 (111)
console.log("clearBit(5,0):", clearBit(5,0)); // 4 (100)
console.log("toggleBit(5,2):", toggleBit(5,2)); // 1 (001)
console.log("countBits(13):", countBits(13)); // 3 (1101 has 3 bits)
