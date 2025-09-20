// 🔹 Quick Table (showing negative now)

// | x  | Binary (x) | \~x (inverted) | Decimal Result |
// | -- | ---------- | -------------- | -------------- |
// | -1 | 11111111   | 00000000       | 0              |
// | -2 | 11111110   | 00000001       | 1              |
// | -3 | 11111101   | 00000010       | 2              |
// | -4 | 11111100   | 00000011       | 3              |
// | -5 | 11111011   | 00000100       | 4              |
// | -6 | 11111010   | 00000101       | 5              |

// Similar = ~(-254) = -((-254) + 1)
        // = -(-253)
        // = 253

// 🔹 Quick Table (showing negative now)

// | x | Binary (x) | \~x (inverted) | Decimal Result |
// | - | ---------- | -------------- | -------------- |
// | 0 | 00000000   | 11111111       | -1             |
// | 1 | 00000001   | 11111110       | -2             |
// | 2 | 00000010   | 11111101       | -3             |
// | 3 | 00000011   | 11111100       | -4             |
// | 4 | 00000100   | 11111011       | -5             |
// | 5 | 00000101   | 11111010       | -6             |
// | 6 | 00000110   | 11111001       | -7             |
// | 7 | 00000111   | 11111000       | -8             |

// Similar = ~(254) = -((254) + 1)
        // = -(255)

// -----------------------
// 4. Bitwise NOT (~)
// -----------------------
console.log("Bitwise NOT (~1): ", ~1); 
// Bitwise NOT of 1 = -2
// Why?
// 1   = 00000000 00000000 00000000 00000001
// ~1  = 11111111 11111111 11111111 11111110
// In two’s complement, this represents -2

// Why does 11111010 mean -6?

// Now comes the two’s complement rule (how computers represent negatives):

// In signed binary:

// 0xxxxxxx = positive numbers

// 1xxxxxxx = negative numbers (encoded in two’s complement)

// How to decode a negative number (two’s complement)

// Steps:

// Take the binary: 11111010

// Invert all bits: 00000101

// Add 1: 00000110 → decimal 6

// Put a minus sign: -6

// So 11111010 = -6.

console.log("Bitwise NOT (~0): ", ~0); // = -1
console.log("Bitwise NOT (~2): ", ~2); // = -3