// Youtube Video - https://www.youtube.com/watch?v=mesu75PTDC8


// =====================
// Bitwise Operators in JavaScript
// =====================


// Bitwise Operators
// &    AND sets each bit to 1 if both bits are 1 ( If both the numbers are 1, then return 1 else return 0)
// |    OR sets each bit to 1 if one of two bits is 1 ( Plus of all the binary numbers then convert to normal number)
// ^    XOR sets each bit to 1 if only one of two bits is 1
// ~    NOT inverts all the bits
// ＜＜ Left Shift shifts left and fills empty spaces with 0
// ＞＞ Right Shift shifts right 




// Rule - Binary Positions (Left to Right): 128 64 32 16 8 4 2 1
// Example: 
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// -----------------------
// 1. Bitwise AND (&)
// -----------------------
console.log("Bitwise AND: ", 1 & 2); 
// Bitwise AND = Answer is 0
// Why? 
// 1 = 00000001
// 2 = 00000010
// ---------------- &
//     00000000 = 0
// Rule: If both bits are 1 → return 1, else return 0

// -----------------------
// 2. Bitwise OR (|)
// -----------------------
console.log("Bitwise OR : ", 1 | 2); 
// Bitwise OR = Answer is 3
// Why? 
// 1 = 00000001
// 2 = 00000010
// ---------------- |
//     00000011 = 3
// Rule: If any one bit is 1 → return 1, else 0, and If both the numbers are 1 then return 1

// -----------------------
// 3. Bitwise XOR (^)
// -----------------------
console.log("Bitwise XOR: ", 1 ^ 2); 
// Bitwise XOR = Answer is 3
// Why? 
// 1 = 00000001
// 2 = 00000010
// ---------------- ^
//     00000011 = 3
// Rule:  If any one bit is 1 → return 1, else 0, and If both the numbers are 1 then return 0

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

// -----------------------
// 5. Left Shift (<<)
// -----------------------
console.log("Left Shift (1 << 2): ", 1 << 2); 
// Answer = 4
// Why? 
// 1 = 00000001
// Shift left by 2 → 00000100 = 4

console.log("Left Shift (3 << 1): ", 3 << 1); 
// Answer = 6
// Why? 
// 3 = 00000011
// Shift left by 1 → 00000110 = 6

// -----------------------
// 6. Right Shift (>>)
// -----------------------
console.log("Right Shift (4 >> 1): ", 4 >> 1); 
// Answer = 2
// Why?
// 4 = 00000100
// Shift right by 1 → 00000010 = 2

console.log("Right Shift (-4 >> 1): ", -4 >> 1); 
// Answer = -2
// Why?
// -4 = 11111100 (two’s complement form)
// Shift right (sign bit preserved) → 11111110 = -2

// -----------------------
// 7. Unsigned Right Shift (>>>)
// -----------------------
console.log("Unsigned Right Shift (4 >>> 1): ", 4 >>> 1); 
// Answer = 2
// Why?
// 4 = 00000100
// Shift right by 1 with 0 fill → 00000010 = 2

console.log("Unsigned Right Shift (-4 >>> 1): ", -4 >>> 1); 
// Answer = 2147483646
// Why?
// -4 = 11111111 11111111 11111111 11111100
// Shift right with 0 fill = 01111111 11111111 11111111 11111110
// Decimal = 2147483646
