| Operator | Result     | Explanation                       |
| -------- | ---------- | --------------------------------- |
| 1 & 2    | 0          | AND → both bits 1 → 0             |
| 1 \| 2   | 3          | OR → either bit 1 → 3             |
| 1 ^ 2    | 3          | XOR → different bits → 3          |
| \~1      | -2         | NOT → flip bits → -2              |
| 1 << 2   | 4          | Left shift → 4                    |
| 3 << 1   | 6          | Left shift → 6                    |
| 4 >> 1   | 2          | Right shift → 2                   |
| -4 >> 1  | -2         | Right shift keeps sign → -2       |
| 4 >>> 1  | 2          | Unsigned right shift → 2          |
| -4 >>> 1 | 2147483646 | Unsigned right shift → 2147483646 |


Note = 

Bitwise LeftShift - x << n  =  x × (2^n)

Bitwise RightShift, and Bitwise UnsignedRightShift works in the same way, only the result varies, when we are dealing with negative number.

x >> n   = floor(x / (2^n))       // Bitwise Rightshift 👉 signed, keeps negative
x >>> n  = floor(unsigned32(x) / (2^n))  // Bitwise UnsignedRightShift, always ≥ 0

👉 Signed = can represent negative and positive numbers.
👉 Unsigned = can only represent non-negative numbers (but has a larger positive range).