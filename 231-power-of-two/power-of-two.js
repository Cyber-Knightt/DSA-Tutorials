/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true;       // base case: 2^0
    if (n <= 0 || n % 2 !== 0) return false; // not positive or not divisible by 2

    return isPowerOfTwo(n / 2);     // recursive call
};