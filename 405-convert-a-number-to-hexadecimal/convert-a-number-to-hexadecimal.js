/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) return "0";

    let hexChars = "0123456789abcdef";
    let result = "";
    let count = 0;

    // Handle 32-bit representation
    num = num >>> 0;

    while (num > 0 && count < 8) { // limit to 8 hex digits
        let digit = num & 0xf; // get last 4 bits
        result = hexChars[digit] + result;
        num = num >>> 4; // shift right by 4 bits
        count++;
    }

    return result;
};