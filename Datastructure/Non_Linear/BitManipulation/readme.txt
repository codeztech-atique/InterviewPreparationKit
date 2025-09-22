# 🧠 Bit Manipulation Cheatsheet (LeetCode-Oriented, JavaScript)

A practical, **pattern-first** guide to decide **which bit trick to use** while solving typical LeetCode problems. Includes mini-templates you can paste into code.


⚡ Easy Analogy

Check a bit → look if a light is ON.
Clear a bit → switch OFF the light at that position.
Set a bit → switch ON the light.
Toggle a bit → flip the switch (ON → OFF, OFF → ON).

---

## 🚦 🧠  Bitwise Operator — When to Use What Decision Guide

 
1. AND (&)

Use when you want to check bits (is a bit set?).

Use to clear bits (turn to 0).

Common: x & 1 → check odd/even.

2. OR (|)

Use when you want to set bits (turn to 1).

Combine flags/options together.

3. XOR (^)

Use when you want to toggle bits.

Use for “unique element” problems (e.g., find the one number that doesn’t repeat).

Good for adding without carry tricks.

4. NOT (~)

Use when you want to flip all bits (0→1, 1→0).

In practice, often used for two’s complement (finding negatives).

Shortcut rule: ~x = -(x+1).

5. Left Shift (<<)

Use to multiply by powers of 2.

Example: x << 1 = x * 2.

6. Right Shift Signed (>>)

Use to divide by powers of 2, keeping the sign (negative stays negative).

Example: x >> 1 ≈ x / 2.

7. Right Shift Unsigned (>>>)

Use to divide by powers of 2, but always non-negative.

Example: -4 >>> 1 → large positive number.

🚦 Simple Problem Patterns

Find single number in array (others appear twice) → use XOR (^)

Check if number is power of 2 → use AND (&) with (n & (n-1))

Generate all subsets of array → use bitmasking with shifts (<<)

Divide/multiply by 2 quickly → use >> and <<

Check odd/even → use & 1

Work with flags/options → use | (set), & (check/clear), ^ (toggle)

✅ That’s it — just remember what each operator is good at.
You don’t need to memorize code; just ask yourself:

“Do I want to check bits?” → &

“Do I want to set bits?” → |

“Do I want to toggle / unique?” → ^

“Do I want to flip all bits?” → ~

“Do I want multiply/divide by 2?” → << or >>

“Do I want unsigned divide?” → >>>


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