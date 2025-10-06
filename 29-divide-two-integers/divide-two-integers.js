/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MIN = -2147483648; // -2^31
    const INT_MAX = 2147483647;  // 2^31 - 1

    // Edge overflow case
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    // Work with sign separately
    let negative = (dividend < 0) ^ (divisor < 0); // true if different signs
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        // keep doubling until temp << 1 is too large
        while ((temp << 1) > 0 && (temp << 1) <= a) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};
