/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Step 1: Trim leading spaces
    s = s.trim();
    if (s.length === 0) return 0;

    let sign = 1;
    let i = 0;
    let result = 0;

    // Step 2: Handle sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    // Step 3: Process digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        // Step 4: Check overflow on each iteration
        if (sign * result > 2147483647) return 2147483647;
        if (sign * result < -2147483648) return -2147483648;
        
        i++;
    }
    return sign * result;
};