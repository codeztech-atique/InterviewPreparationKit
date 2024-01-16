function encodeString(inputStr) {
    // Validate input
    if (!/^[A-Z]+$/.test(inputStr)) {
        return "Invalid String";
    }

    let result = "";
    let charCount = {};

    for (let i = 0; i < inputStr.length; i++) {
        const currentChar = inputStr[i];

        // Count consecutive occurrences of the current character
        let count = 1;
        while (i + 1 < inputStr.length && currentChar === inputStr[i + 1]) {
            i++;
            count++;
        }

        // Encode the character and its count
        if (!charCount[currentChar]) {
            charCount[currentChar] = 1;
        } else {
            charCount[currentChar]++;
        }

        result += currentChar;
        if (count > 1) {
            result += charCount[currentChar].toString();
        }
    }

    return result;
}

// Example usage:
const inputStr = "WIINNNGGIIFFFFFFFYYYY";
const outputStr = encodeString(inputStr);
console.log(outputStr);
