
const mainFunction = (decimal) => {
    let result = "";
    if(decimal == 0) return "0";
    while(decimal > 0) {
        if(decimal % 2 != 0) {
            result += '1';
        } else {
            result += '0';
        }
        decimal = Math.floor(decimal / 2);
    }
    return result.split("").reverse().join("");
}

const tests = [
  { input: 0, expected: "0" },   // edge case
  { input: 1, expected: "1" },
  { input: 2, expected: "10" },
  { input: 3, expected: "11" },
  { input: 4, expected: "100" },
  { input: 5, expected: "101" },
  { input: 6, expected: "110" },
  { input: 7, expected: "111" },
  { input: 8, expected: "1000" },
  { input: 9, expected: "1001" },
  { input: 10, expected: "1010" },
  { input: 11, expected: "1011" },
  { input: 12, expected: "1100" },
  { input: 13, expected: "1101" },
  { input: 14, expected: "1110" },
  { input: 15, expected: "1111" },
  { input: 16, expected: "10000" },
  { input: 17, expected: "10001" },
  { input: 18, expected: "10010" },
  { input: 19, expected: "10011" },
  { input: 20, expected: "10100" },
  { input: 21, expected: "10101" },
  { input: 31, expected: "11111" },
  { input: 32, expected: "100000" },
  { input: 37, expected: "100101" },
  { input: 64, expected: "1000000" },
  { input: 127, expected: "1111111" },
  { input: 128, expected: "10000000" },
  { input: 255, expected: "11111111" },
  { input: 1023, expected: "1111111111" }
];


tests.forEach((t, idx) => {
  const output = mainFunction(t.input);
  const pass = output === t.expected ? "✅ PASS" : `❌ FAIL (got ${output})`;
  console.log(`${idx+1}. input=${t.input} expected=${t.expected} => ${pass}`);
});
