class Addition {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    // decimalAddition() {
    //     let a = this.a;
    //     let b = this.b;
    //     let carry = 0;
    //     let result = "";
    //     if(a == 0 && b == 0) return "0";
    //     while(a > 0 || b > 0 || carry > 0) {
    //         const remA = a % 10; a = Math.floor(a / 10);
    //         const remB = b % 10; b = Math.floor(b / 10);

    //         const digitSum = remA + remB + carry;
    //         result += (digitSum % 10);          // current digit
    //         carry = Math.floor(digitSum / 10);  // next carry (0 or 1 for base 10)
                
    //     }
    //     return result.split("").reverse().join("");
    // }

    decimalAddition() {
        let a = this.a;
        let b = this.b;
        let carry = 0;
        let result = "";
        if(a == 0 && b == 0) return "0";
        while(a > 0 || b > 0 || carry > 0) {
            let remA = a % 10; a = Math.floor(a / 10);
            let remB = b % 10; b = Math.floor(b / 10);

            let sum = remA + remB + carry;
            result += sum % 10;
            carry = Math.floor(sum / 10);
        }
        return result.split("").reverse().join("");
    }
}

const mainFunction = (a, b) => {
    const additionClass = new Addition(a, b);
    return additionClass.decimalAddition();
}

const tests = [
  { a: 0, b: 0, expected: "0" },                 // both zero
  { a: 0, b: 5, expected: "5" },                 // one side zero
  { a: 5, b: 0, expected: "5" },                 // one side zero
  { a: 9, b: 1, expected: "10" },                // single-digit carry
  { a: 99, b: 1, expected: "100" },              // multi-carry ripple
  { a: 123, b: 456, expected: "579" },           // basic add
  { a: 999, b: 1, expected: "1000" },            // carry through all digits
  { a: 999, b: 999, expected: "1998" },          // your sample
  { a: 1000, b: 0, expected: "1000" },           // same number back
  { a: 1000, b: 1, expected: "1001" },           // boundary
  { a: 101, b: 909, expected: "1010" },          // staggered digits
  { a: 42, b: 58, expected: "100" },             // exact hundred
  { a: 5005, b: 995, expected: "6000" },         // multiple carries, zeros inside
  { a: 70008, b: 92, expected: "70100" },        // zeros in the middle
  { a: 1, b: 9999, expected: "10000" },          // long carry to new digit
  { a: 13579, b: 24680, expected: "38259" },     // random-ish
  { a: 808, b: 808, expected: "1616" },          // same add
  { a: 4444, b: 5555, expected: "9999" },        // nines result
  { a: 314159, b: 271828, expected: "585987" },  // biggish
  { a: 1000000000, b: 1, expected: "1000000001" }, // 10^9 + 1
  { a: 999999999, b: 1, expected: "1000000000" },  // ripple to 10^9
  { a: 400000000, b: 600000000, expected: "1000000000" }, // sums to 10^9
  { a: 123456789, b: 987654321, expected: "1111111110" }, // famous pair
  { a: 1002003, b: 997, expected: "1003000" },   // inner zeros preserved
  { a: 909090, b: 90909, expected: "999999" },   // many 9s
  { a: 80808080, b: 19191920, expected: "100000000" }, // exact hundred million
  { a: 500000, b: 500000, expected: "1000000" }, // exact million
  { a: 2147483647, b: 1, expected: "2147483648" }, // 32-bit int boundary
  { a: 4004, b: 44, expected: "4048" },          // small with inner zeros
  { a: 12345000, b: 6789, expected: "12351789" } // tail alignment
];

let passCount = 0;
tests.forEach((t, idx) => {
  const output = mainFunction(t.a, t.b);
  const pass = output === t.expected;
  if (pass) passCount++;
  const status = pass ? "✅ PASS" : `❌ FAIL (got ${output})`;
  console.log(
    `${idx + 1}. a=${t.a} b=${t.b} expected=${t.expected} => ${status}`
  );
});