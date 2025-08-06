/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;       // Add 1 and return if no carry
            return digits;
        }
        digits[i] = 0;         // Set current digit to 0 (carry forward)
    }
    digits.unshift(1);         // If loop completes, it means all digits were 9
    return digits;
};