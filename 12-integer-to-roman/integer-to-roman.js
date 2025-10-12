/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // Step 1: Map Roman symbols to values
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    // Step 2: Build Roman numeral
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {     // keep subtracting the current value
            num -= values[i];          // reduce number
            result += symbols[i];      // append corresponding symbol
        }
    }
    return result;
};