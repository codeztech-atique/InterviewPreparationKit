function binaryToDecimal(binaryStr) {
  let decimal = 0;

  for (let i = 0; i < binaryStr.length; i++) {
    // Get the current bit (0 or 1)
    let bit = binaryStr[i];

    // Shift the current result left by 1 (same as multiply by 2)
    // and add the new bit
    decimal = (decimal << 1) | (bit === '1' ? 1 : 0);
  }

  return decimal;
}

// Example:
console.log(binaryToDecimal("11")); // Output: 3
