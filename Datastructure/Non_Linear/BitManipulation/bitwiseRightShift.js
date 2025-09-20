// 🔹 Right Shift (>>) Formula

// x >> n = floor(x / (2^n))

// x = the number you’re shifting
// n = how many positions you shift right
// Equivalent to integer division by powers of 2
// Keeps the sign bit (so negatives stay negative)

// Example = -9 >> 1
// Answer  = -9 / 2 = -4.5 → floor = -5

// 🔹 Positive Numbers (Easy Division)

// | x  | Binary(x) | x >> 1 (÷2) | Binary Result | x >> 2 (÷4) | Binary Result |
// | -- | --------- | ----------- | ------------- | ----------- | ------------- |
// | 1  | 00000001  | 0           | 00000000      | 0           | 00000000      |
// | 2  | 00000010  | 1           | 00000001      | 0           | 00000000      |
// | 3  | 00000011  | 1           | 00000001      | 0           | 00000000      |
// | 4  | 00000100  | 2           | 00000010      | 1           | 00000001      |
// | 5  | 00000101  | 2           | 00000010      | 1           | 00000001      |
// | 6  | 00000110  | 3           | 00000011      | 1           | 00000001      |
// | 7  | 00000111  | 3           | 00000011      | 1           | 00000001      |
// | 8  | 00001000  | 4           | 00000100      | 2           | 00000010      |
// | 9  | 00001001  | 4           | 00000100      | 2           | 00000010      |
// | 10 | 00001010  | 5           | 00000101      | 2           | 00000010      |
